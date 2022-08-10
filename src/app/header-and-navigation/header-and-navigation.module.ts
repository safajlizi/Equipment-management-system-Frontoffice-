import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  exports: [SideNavComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class HeaderAndNavigationModule {}
