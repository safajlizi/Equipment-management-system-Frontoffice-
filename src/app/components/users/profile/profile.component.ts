
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipment } from 'src/app/models/equipment';
import { User } from 'src/app/models/user';
import { EquipmentService } from 'src/app/services/equipment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { PasswordComponent } from '../settings/password/password.component';
import { SettingListComponent } from '../settings/setting-list/setting-list.component';
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

}
