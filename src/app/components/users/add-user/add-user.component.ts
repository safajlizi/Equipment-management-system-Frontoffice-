import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NotifComponent } from '../../alert/notif/notif.component';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  hide = true;
  durationInSeconds = 5;
  userForm!:FormGroup;
  actionBtn:string="Save"
  test=false
  constructor(private formBuilder :FormBuilder,private api:UserService,
    @Inject(MAT_DIALOG_DATA)public edittData:any, 
    private dialogRef:MatDialogRef<AddUserComponent>,
    private router:Router,private route:ActivatedRoute,
    private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      role: [null, Validators.required]

      
    })
    if(this.edittData){
      this.test=true
      this.actionBtn="Update"
      this.userForm.controls['email'].setValue(this.edittData.email);
      this.userForm.controls['lastname'].setValue(this.edittData.lastname);
      this.userForm.controls['firstname'].setValue(this.edittData.firstname);
      this.userForm.controls['username'].setValue(this.edittData.username);
      this.userForm.controls['role'].setValue(this.edittData.role);
    }
  }
  updateUser(){
    this.api.putUser(this.userForm.value,this.edittData.id)
    .subscribe({
      next:(res)=>{

        this._snackBar.open("User updated successfuly",'',{ 
          duration: 3000
      });
        
        this.userForm.reset();
        this.dialogRef.close();
        this.test=false
        this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
        this.router.navigate(['./'],{
          relativeTo: this.route
        })
      },
      error:()=>{
        this._snackBar.open("error while updating user",'',{ 
          duration: 3000
      });
      }})


  }

  addUser(){
  
    if(!this.edittData){
      if(this.userForm.valid){
      this.api.postUser(this.userForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("EUser added successfuly",'',{ 
            duration: 3000
        })
          this.userForm.reset();
          this.dialogRef.close();
          this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
          this.router.navigate(['./'],{
            relativeTo: this.route
          })
        },
        error:()=>{
          this._snackBar.open("error while adding user",'',{ 
            duration: 3000
        })
        }
      })
     } }
     else{
      this.test=true
      this.updateUser()
     }

  } 
  
}
