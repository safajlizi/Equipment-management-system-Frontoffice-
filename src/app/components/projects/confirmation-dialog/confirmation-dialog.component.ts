import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router,ActivatedRoute  } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProjectService}from '../../../services/project.service'
import {UserService}from '../../../services/user.service'

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})

export class ConfirmationDialogComponent implements OnInit {
  hide = true;
  passwordResetForm!: FormGroup;
  passwordsMatch = true;
  message = '';
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private apiU:UserService,private apiP:ProjectService,private apiE:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any,private router:Router,private route:ActivatedRoute, private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<ConfirmationDialogComponent>,private _snackBar: MatSnackBar
  ) {
    
  
  }
  deleteE(id:number){
    this.apiE.deleteEquipment(id).subscribe({
      next:(res)=>{
        this.dialogRef.close();
        this._snackBar.open("equipment deleted successfuly",'',{ 
          duration: 3000
      })
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.navigate(['./'],{
        relativeTo: this.route})
      },
      error:()=>{
        this._snackBar.open("ou should liberate equipment from project before delete it",'',{ 
          duration: 3000
      })
      }
    })
  }
  deleteProject(id:string){
    this.apiP.deleteProject(id).subscribe({
      next:(res)=>{
        this.dialogRef.close();
        this._snackBar.open("project deleted successfuly",'',{ 
          duration: 3000
      })
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.navigate(['./'],{
        relativeTo: this.route
      })
      },
      error:()=>{
        this._snackBar.open("ou should liberate equipment from project before delete it",'',{ 
          duration: 3000
      })
      }
    })
  }
  deleteUser(id:string){
    this.apiU.deleteUser(id).subscribe({
      next:(res)=>{
        this.dialogRef.close();
        this._snackBar.open("user deleted successfuly",'',{ 
          duration: 3000
      })
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.navigate(['./'],{
        relativeTo: this.route
      })
      },
      error:()=>{
        this._snackBar.open("you should liberate equipment before delete USER",'',{ 
          duration: 3000
      })
      }
    })
  }
ngOnInit(): void {
  
}
onConfirmClick(): void {
if(this.editData.project)
{
  this.deleteProject(this.editData.id)
}
if(this.editData.equipment)
{
  this.deleteE(this.editData.id)
}
if(this.editData.user)
{
  this.deleteUser(this.editData.id)
}
}
}