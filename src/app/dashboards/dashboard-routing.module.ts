

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhistoryComponent } from '../history/userhistory/userhistory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: '', component: Dashboard2Component },
      { path: 'history', component: UserhistoryComponent },
     // { path: 'reportes', component: ReportesComponent },
    ]  
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }