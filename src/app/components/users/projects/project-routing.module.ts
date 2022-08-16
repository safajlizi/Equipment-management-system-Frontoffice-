import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddequipmentComponent } from '../../equipment/addequipment/addequipment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
      path: '', component: DashboardComponent,
      children: [
        { path: '', component: AddequipmentComponent }
       /*   { path: '', component: EquipmentListComponent },
          { path: 'profile', component: ProfileComponent},
          { path: 'projects', component: ProjectsListComponent},
          { path: 'history', component: HistoryComponent }*/
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
