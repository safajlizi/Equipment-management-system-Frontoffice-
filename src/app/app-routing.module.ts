import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './auth/login/signin.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';
import { ProjectEquipmentRootComponent } from './projects/project-equipment-root/project-equipment-root.component';
import { ProjectMemberRootComponent } from './projects/project-member-root/project-member-root.component';
import { UserProjectsComponent } from './projects/user-projects/user-projects.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  {
    path: 'dashboard',
    component: Dashboard2Component,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'projects',
    component: UserProjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/members/:id',
    component: ProjectMemberRootComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects/equipment/:id',
    component: ProjectEquipmentRootComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
