import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent}from '../app/components/login/signin/signin.component'
import { UserModule } from './components/users/user.module';
import { AuthGuard } from './auth.guard';


const userModule = () => import('./components/users/user.module').then(x => x.UserModule);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'dashboard', loadChildren:userModule,
  canActivate: [AuthGuard],},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation :'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
