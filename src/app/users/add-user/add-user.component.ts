import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  hide = true;
  userForm!: FormGroup;
  actionBtn: string = 'save';
  constructor(
    private formBuilder: FormBuilder,
    private api: UserService,
    @Inject(MAT_DIALOG_DATA) public edittData: any,
    private dialogRef: MatDialogRef<AddUserComponent>
  ) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [null, Validators.required],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.api.postUser(this.userForm.value).subscribe({
        next: (res) => {
          alert('User added successfuly');
          this.userForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert('error while adding user');
        },
      });
    }
  }
}
