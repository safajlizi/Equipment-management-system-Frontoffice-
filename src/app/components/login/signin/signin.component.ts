import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form:FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  role!: string;
  message=false

  constructor(private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _titleService: Title
) { 
    this.form=this.fb.group({
      identifier:['',Validators.required],
      password:['',Validators.required]
    })
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
    this.authService.login(identifier.value, password.value).subscribe({
      next: (data) => {
        
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(this.tokenStorage.parseJwt(data.jwt));
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.message=false
        this.role = this.tokenStorage.getUser().role;
        this.router.navigateByUrl('/dashboard');
        this.reloadPage();
      },
      error: (err) => {
        this.isLoginFailed = true;
        this.message=true
      },
    });
  }
  reloadPage(): void {
    window.location.reload();
  }


}
