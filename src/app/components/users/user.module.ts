import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { CurrentMatComponent } from './current-mat/current-mat.component'
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
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
import {MatMenuModule} from '@angular/material/menu';
import { SideNavComponent } from '../dashboards/side-nav/side-nav.component';
import { Dashbord1Component } from '../dashboards/dashbord1/dashbord1.component';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';
import { HeaderComponent } from '../dashboards/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Dashboard2Component } from '../dashboards/dashboard2/dashboard2.component';
import { ListProjectsComponent } from '../projects/list-projects/list-projects.component';
import { CreateProjectComponent } from '../projects/create-project/create-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EquipmentListComponent } from '../equipment/equipment-list/equipment-list.component';
import { ReserveComponent } from '../equipment/reserve/reserve.component';
import { Dashboard3Component } from '../projects/dashboard3/dashboard3.component'
import { ProjectManagerListComponent } from '../projects/project-manager-list/project-manager-list.component';
import { ProjectMembersComponent } from '../projects/project-members/project-members.component';
import { ProjectEquipmentComponent } from '../projects/project-equipment/project-equipment.component';
import { ProjectEquipmentAssignComponent } from '../projects/project-equipment-assign/project-equipment-assign.component';
import { ProjectMembersRootComponent } from '../projects/project-members-root/project-members-root.component';
import { ProjectEquipmentRootComponent } from '../projects/project-equipment-root/project-equipment-root.component';
import { ProjectEquipmentAddComponent } from '../projects/project-equipment-add/project-equipment-add.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReserveEquipmentComponent } from '../projects/reserve-equipment/reserve-equipment.component';
import { ProectReservedEquipmentComponent } from '../projects/proect-reserved-equipment/proect-reserved-equipment.component';

import { DatePipe } from '@angular/common';
import { ProjectMemberAddComponent } from '../projects/project-member-add/project-member-add.component';
import { ProjectMemberListComponent } from '../projects/project-member-list/project-member-list.component';
@NgModule({
  declarations: [
    Dashboard3Component,
    ProfileComponent,
    HistoryComponent,
    CurrentMatComponent,
    SideNavComponent ,
    DashboardComponent,
    Dashbord1Component ,
    HeaderComponent,
    Dashboard2Component ,
    CreateProjectComponent,
    ListProjectsComponent ,
    AddUserComponent,
    UpdateUserComponent ,
    UserlistComponent,
    EquipmentListComponent,
    ProjectMembersComponent,
    ProjectEquipmentComponent,
    ReserveComponent,
    ProjectMemberAddComponent,
    ProjectMemberListComponent ,
    ProjectManagerListComponent,
    ProjectEquipmentAssignComponent,
    ProjectMembersRootComponent,
    ProjectEquipmentRootComponent,
    ProjectEquipmentAddComponent,
    ReserveEquipmentComponent,
    ProectReservedEquipmentComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
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
  providers: [DatePipe]
})
export class UserModule { }