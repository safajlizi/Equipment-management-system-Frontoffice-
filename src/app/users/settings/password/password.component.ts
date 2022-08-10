import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  hide = true;
  passwordResetForm!: FormGroup;
  passwordsMatch = true;
  message = '';
  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private tokenStorage: TokenStorageService
  ) {
    this.passwordResetForm = this.fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      newpasswordconfirm: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  checkConfirm(event: Event) {
    if (
      this.passwordResetForm.value['newpassword'] !==
      this.passwordResetForm.value['newpasswordconfirm']
    )
      this.passwordsMatch = false;
    else this.passwordsMatch = true;
  }
  submit() {
    let userId = this.tokenStorage.getUser().id;
    this.api.resetPassword(userId, this.passwordResetForm.value).subscribe(
      () => {
        this.message = 'Succesful!';
      },
      (err) => {
        console.log(err);
        this.message = err.message;
      }
    );
  }
}
