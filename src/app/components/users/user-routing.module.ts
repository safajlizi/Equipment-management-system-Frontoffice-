import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { EquipmentListComponent } from '../equipment/equipment-list/equipment-list.component';
import { Dashboard3Component } from '../projects/dashboard3/dashboard3.component';
import { ProjecMemberComponent } from '../projects/projec-member/projec-member.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent,
      children: [
          { path: '', component: EquipmentListComponent },
          { path: 'profile', component: ProfileComponent},
        { path: 'projects', component: Dashboard3Component},
        
        { path: 'projects/members/:id', component:ProjecMemberComponent},
          { path: 'history', component: HistoryComponent }
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
