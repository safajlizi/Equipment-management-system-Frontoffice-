import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddequipmentComponent } from './addequipment/addequipment.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmenthistoryComponent } from './equipmenthistory/equipmenthistory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveEquipmentComponent } from './reserve-equipment/reserve-equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AddequipmentComponent,
    EquipmentListComponent,
    EquipmenthistoryComponent,
    NavbarComponent,
    ReserveComponent,
    ReserveEquipmentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
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
    AddequipmentComponent,
    EquipmentListComponent,
    EquipmenthistoryComponent,
    NavbarComponent,
    ReserveComponent,
    ReserveEquipmentComponent,
  ],
})
export class EquipmentModule {}
