import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { RemoveEquipmentComponent } from '../../projects/remove-equipment/remove-equipment.component';
import { PasswordComponent } from '../settings/password/password.component';
import { UsernameComponent } from '../settings/username/username.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  equipments: any;
  constructor(
    private dialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    this.userService
      .getEquipsOfUser(this.user.id)
      .subscribe((res) => (this.equipments = res));
  }
  usernameTrig() {
    const dialogRef = this.dialog.open(UsernameComponent, {});
  }
  passwordTrig() {
    const dialogRef = this.dialog.open(PasswordComponent, {});
  }
  removeEquipmentfromProject(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(RemoveEquipmentComponent,{
      
      data:{'row':row,'isManager':false}  
    })}


  

}
