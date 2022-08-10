import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { NavbarProjectComponent } from './navbar-project/navbar-project.component';
import { ProjectMemberAddComponent } from './project-member-add/project-member-add.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { AppModule } from '../app.module';
import { HeaderAndNavigationModule } from '../header-and-navigation/header-and-navigation.module';

@NgModule({
  declarations: [
    ListProjectsComponent,
    CreateProjectComponent,
    NavbarProjectComponent,
    ProjectMemberAddComponent,
    UserProjectsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HeaderAndNavigationModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  exports: [
    ListProjectsComponent,
    CreateProjectComponent,
    NavbarProjectComponent,
    ProjectMemberAddComponent,
    UserProjectsComponent,
  ],
})
export class ProjectsModule {}
