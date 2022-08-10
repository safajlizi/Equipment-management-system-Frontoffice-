import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { SigninComponent } from './auth/login/signin.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';
import { ListProjectsComponent } from './projects/list-projects/list-projects.component';
import { ProjectMemberAddComponent } from './projects/project-member-add/project-member-add.component';

import { ProjectsModule } from './projects/projects.module';
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
    path: 'projects/:id',
    component: ProjectMemberAddComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
