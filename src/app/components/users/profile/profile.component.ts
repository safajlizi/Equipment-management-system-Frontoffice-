import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordComponent } from '../settings/password/password.component';
import { SettingListComponent } from '../settings/setting-list/setting-list.component';
import { UsernameComponent } from '../settings/username/username.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  username(){
    const dialogRef = this.dialog.open(UsernameComponent,{
      
    });}
   password(){
    const dialogRef = this.dialog.open(PasswordComponent,{
      
    });
   } 
}
