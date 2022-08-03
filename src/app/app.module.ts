import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';
import { HeaderComponent } from './components/dashboards/header/header.component';
import { SideNavComponent } from './components/dashboards/side-nav/side-nav.component';
import { SigninComponent } from './components/login/signin/signin.component';
import { UserhistoryComponent } from './components/history/userhistory/userhistory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dashboard2Component } from './components/dashboards/dashboard2/dashboard2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NavbarComponent } from './components/equipment/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddequipmentComponent } from './components/equipment/addequipment/addequipment.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import {MatNativeDateModule} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentListComponent } from './components/equipment/equipment-list/equipment-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UserlistComponent } from './components/users/userlist/userlist.component';
import { Navbar2Component } from './components/users/navbar2/navbar2.component';
import { Dashbord1Component } from './components/dashboards/dashbord1/dashbord1.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    SigninComponent,
    UserhistoryComponent,
    Dashboard2Component,
    NavbarComponent,
    AddequipmentComponent,
    AddUserComponent,
    UpdateUserComponent,
    EquipmentListComponent,
    UserlistComponent,
    Navbar2Component,
    Dashbord1Component,
    
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
