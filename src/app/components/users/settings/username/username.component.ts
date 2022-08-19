import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


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
    private tokenStorage: TokenStorageService
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
          this.message = 'Succesful!';
          this.tokenStorage.editUser('username', res.username);
        },
        (err) => {
          this.message = 'This username already exists!';
        }
      );
  }
}
