import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { RemoveEquipmentComponent } from '../../projects/remove-equipment/remove-equipment.component';
import { PasswordComponent } from '../settings/password/password.component';
import { UsernameComponent } from '../settings/username/username.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userId:any
  equipments: any;
  constructor(
    private dialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.userId= this.user.id
    this.userService
      .getEquipsOfUser(this.user.id)
      .subscribe( { next:(res)=>{
        this.equipments = res[0].equipment},
        error:()=>{
        alert("error while return equipment")
        }

      });
  }
  usernameTrig() {
    const dialogRef = this.dialog.open(UsernameComponent, {});
  }
  passwordTrig() {
    const dialogRef = this.dialog.open(PasswordComponent, {});
  }
  removeEquipmentfromProject(row :any,id:any,projectId:any){
   
    if(id != this.user.id){
      this.routes.navigate(['/dashboard/projects/member/equipment/'+projectId]);
    }
    else{
      this.routes.navigate(['/dashboard/projects/equipment/'+projectId]);
    }
   

    }


  

}
