import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  role = '';
  form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.form = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit(): void {
    const { identifier, password } = this.form.controls;
    console.log(this.form.value);
    this.authService.login(identifier.value, password.value).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(this.tokenStorage.parseJwt(data.jwt));
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        this.isLoginFailed = true;
      },
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
