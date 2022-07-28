import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboards/dashboard/dashboard.component';
import { HeaderComponent } from './components/dashboards/header/header.component';
import { SideNavComponent } from './components/dashboards/side-nav/side-nav.component';
import { SigninComponent } from './components/login/signin/signin.component';
import { UserhistoryComponent } from './components/history/userhistory/userhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    SigninComponent,
    UserhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
