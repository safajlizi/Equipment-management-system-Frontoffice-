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
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './components/equipment/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddequipmentComponent } from './components/equipment/addequipment/addequipment.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquipmentListComponent } from './components/equipment/equipment-list/equipment-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserlistComponent } from './components/users/userlist/userlist.component';
import { Navbar2Component } from './components/users/navbar2/navbar2.component';
import { Dashbord1Component } from './components/dashboards/dashbord1/dashbord1.component';
import { MatSelectModule } from '@angular/material/select';
import { EquipmenthistoryComponent } from './components/equipment/equipmenthistory/equipmenthistory.component';
import { ReserveComponent } from './components/equipment/reserve/reserve.component';
import { ReserveEquipmentComponent } from './components/equipment/reserve-equipment/reserve-equipment.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { SettingListComponent } from './components/users/settings/setting-list/setting-list.component';
import { PasswordComponent } from './components/users/settings/password/password.component';
import { UsernameComponent } from './components/users/settings/username/username.component';
import { MatMenuModule } from '@angular/material/menu';
import { ListProjectsComponent } from './components/projects/list-projects/list-projects.component';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { NavbarProjectComponent } from './components/projects/navbar-project/navbar-project.component';
import { DatePipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ManagerCardComponent } from './components/projects/manager-card/manager-card.component';

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
    EquipmenthistoryComponent,
    ReserveComponent,
    ReserveEquipmentComponent,
    ProfileComponent,
    SettingListComponent,
    PasswordComponent,
    UsernameComponent,
    ListProjectsComponent,
    CreateProjectComponent,
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
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
