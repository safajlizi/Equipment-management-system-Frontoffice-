import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  hide = true;
  passwordResetForm!: FormGroup;
  passwordsMatch = true;
  message = '';
  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<PasswordComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router,private route:ActivatedRoute
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
        this._snackBar.open("password updated Successfuly!",'',{ 
          duration: 3000
      })
        this.passwordResetForm.reset()
        this.dialogRef.close
        this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
        this.router.navigate(['./'],{
          relativeTo: this.route
        })
      },
      (err) => {
        this._snackBar.open(err.message,'',{ 
          duration: 3000
      })
        this.passwordResetForm.reset()

      }
    );
  }
}
