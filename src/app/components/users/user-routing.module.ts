import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { EquipmentListComponent } from '../equipment/equipment-list/equipment-list.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectComponent } from './projects/project/project.component';
const projectModule = () => import('./projects/project.module').then(x => x.ProjectModule);

const routes: Routes = [
  {
      path: '', component: DashboardComponent,
      children: [
          { path: '', component: EquipmentListComponent },
          { path: 'profile', component: ProfileComponent},
          { path: 'projects', component: ProjectsListComponent},
          { path: 'project', loadChildren:projectModule},
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
