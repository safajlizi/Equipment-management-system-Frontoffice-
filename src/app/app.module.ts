import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SigninComponent } from './components/login/signin/signin.component';
import { UserhistoryComponent } from './components/history/userhistory/userhistory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddequipmentComponent } from './components/equipment/addequipment/addequipment.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { SettingListComponent } from './components/users/settings/setting-list/setting-list.component';
import { PasswordComponent } from './components/users/settings/password/password.component';
import { UsernameComponent } from './components/users/settings/username/username.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import { NavbarProjectComponent } from './components/projects/navbar-project/navbar-project.component';
import { DatePipe } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ManagerCardComponent } from './components/projects/manager-card/manager-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    UserhistoryComponent,
    AddequipmentComponent,
    SettingListComponent,
    PasswordComponent,
    UsernameComponent,
    NavbarProjectComponent,
     ManagerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule ,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
