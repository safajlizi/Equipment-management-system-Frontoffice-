import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  usernameChangeForm!: FormGroup;
  user: any;
  message = '';
  constructor(
    private fb: FormBuilder,
    private api: UserService,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<UsernameComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router, private route:ActivatedRoute
  ) {
    this.usernameChangeForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }
  save() {
    this.api
      .changeUsername(this.user.id, this.usernameChangeForm.value.username)
      .subscribe(
        (res) => {
          this._snackBar.open("username updated successfuly",'',{ 
            duration: 3000
        })
          this.tokenStorage.editUser('username', res.username);
          this.usernameChangeForm.reset()
          this.dialogRef.close();
          this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
          this.router.navigate(['/dashboard/profile'],{
            relativeTo: this.route
          })
        },
        (err) => {
          this._snackBar.open("This username already exists!",'',{ 
            duration: 3000
        })
        }
      );
  }
}
