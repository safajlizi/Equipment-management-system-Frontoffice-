import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingListComponent } from './settings/setting-list/setting-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { PasswordComponent } from './settings/password/password.component';
import { UsernameComponent } from './settings/username/username.component';

@NgModule({
  declarations: [
    AddUserComponent,
    Navbar2Component,
    ProfileComponent,
    SettingListComponent,
    UpdateUserComponent,
    UserhistoryComponent,
    UserlistComponent,
    PasswordComponent,
    UsernameComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  exports: [
    AddUserComponent,
    Navbar2Component,
    ProfileComponent,
    SettingListComponent,
    UpdateUserComponent,
    UserhistoryComponent,
    UserlistComponent,
  ],
})
export class UsersModule {}
