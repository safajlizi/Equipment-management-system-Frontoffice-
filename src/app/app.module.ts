import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserhistoryComponent } from './components/history/userhistory/userhistory.component';

import { DatePipe } from '@angular/common';
import { ProjectsModule } from './projects/projects.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { UsersModule } from './users/users.module';
import { EquipmentModule } from './equipment/equipment.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, UserhistoryComponent],
  imports: [
    AuthModule,
    ProjectsModule,
    EquipmentModule,
    DashboardsModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
