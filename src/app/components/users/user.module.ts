import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
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
import { ProjectMembersRootComponent } from '../projects/project-members-root/project-members-root.component';
import { ProjectEquipmentRootComponent } from '../projects/project-equipment-root/project-equipment-root.component';
import { ProjectEquipmentAddComponent } from '../projects/project-equipment-add/project-equipment-add.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReserveEquipmentComponent } from '../projects/reserve-equipment/reserve-equipment.component';
import { ProectReservedEquipmentComponent } from '../projects/proect-reserved-equipment/proect-reserved-equipment.component';
import { ProjectMemberMembersComponent } from '../projects/project-member-members/project-member-members.component';
import { ProjectMemberEquipmentComponent } from '../projects/project-member-equipment/project-member-equipment.component';
import { HistoryComponent } from '../history/history/history.component';
import { PasswordComponent } from './settings/password/password.component';
import { UsernameComponent } from './settings/username/username.component';
import { DatePipe } from '@angular/common';
import { ProjectMemberAddComponent } from '../projects/project-member-add/project-member-add.component';
import { UserHistoryComponent } from '../history/user-history/user-history.component';
import { DetailsComponent } from '../equipment/details/details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotifComponent } from '../alert/notif/notif.component';
import { DefaultComponent } from '../equipment/default/default.component';
import { RemoveEquipmentComponent } from '../projects/remove-equipment/remove-equipment.component';
import { MemberCardComponent } from '../projects/member-card/member-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MembersComponent } from '../projects/members/members.component';
import { DetailsAvailibilityComponent } from '../equipment/details-availibility/details-availibility.component';
import { DetailsEquipmentComponent } from '../equipment/details-equipment/details-equipment.component';
import { ProjectMemberListComponent } from '../projects/project-member-list/project-member-list.component';
import { SerieNumberComponent } from '../equipment/seetings/serie-number/serie-number.component';
import { DescriptionComponent } from '../equipment/seetings/description/description.component';
import { ConstructorComponent } from '../equipment/seetings/constructor/constructor.component';
import { SettingsVisibilityComponent } from '../equipment/settings-visibility/settings-visibility.component';
import { DashboardSettingsComponent } from '../dashboards/dashboard-settings/dashboard-settings.component';
import { SettingCategoryComponent } from '../equipment/setting-category/setting-category.component';
import { ConfirmationDialogComponent } from '../projects/confirmation-dialog/confirmation-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    Dashboard3Component,
    ProfileComponent,
    HistoryComponent,
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
    ProjectMembersRootComponent,
    ProjectEquipmentRootComponent,
    ProjectEquipmentAddComponent,
    ReserveEquipmentComponent,
    ProectReservedEquipmentComponent,
    ProjectMemberMembersComponent,
    ProjectMemberEquipmentComponent,
    HistoryComponent,
    PasswordComponent,
    UsernameComponent,
    UserHistoryComponent,
    DetailsComponent,
    NotifComponent,
    DefaultComponent,
    RemoveEquipmentComponent,
    MemberCardComponent ,
    MembersComponent ,
    DetailsEquipmentComponent,
    DetailsAvailibilityComponent,
    SerieNumberComponent,
    ConstructorComponent,
    DescriptionComponent,
    SettingsVisibilityComponent,
    DashboardSettingsComponent,
    SettingCategoryComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule ,
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
    MatTooltipModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [DatePipe]
})
export class UserModule { }
