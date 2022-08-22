import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from '../history/history/history.component';
import { EquipmentListComponent } from '../equipment/equipment-list/equipment-list.component';
import { Dashboard3Component } from '../projects/dashboard3/dashboard3.component';
import { ProjecMemberComponent } from '../projects/projec-member/projec-member.component';
import { ProjectMembersRootComponent } from '../projects/project-members-root/project-members-root.component';
import { ProjectEquipmentRootComponent } from '../projects/project-equipment-root/project-equipment-root.component';
import { ProjectEquipmentAddComponent } from '../projects/project-equipment-add/project-equipment-add.component';
import { ProjectMemberMembersComponent } from '../projects/project-member-members/project-member-members.component';
import { ProjectMemberEquipmentComponent } from '../projects/project-member-equipment/project-member-equipment.component';
import { UserHistoryComponent } from '../history/user-history/user-history.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent,
      children: [
          { path: '', component: EquipmentListComponent },
          { path: 'profile', component: ProfileComponent},
        { path: 'projects', component: Dashboard3Component},
   
        { path: 'projects/equipment/addequipment/:id', component:ProjectEquipmentAddComponent},
        { path: 'projects/members/:id', component:ProjectMembersRootComponent},
        { path: 'projects/member/members/:id', component:ProjectMemberMembersComponent},
        { path: 'projects/member/equipment/:id', component:ProjectMemberEquipmentComponent},
        { path: 'userhistory/:id', component: UserHistoryComponent},
        { path: 'projects/equipment/:id', component:ProjectEquipmentRootComponent},
          { path: 'history/:id', component: HistoryComponent },
          { path: '**', redirectTo: '' }

      ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
