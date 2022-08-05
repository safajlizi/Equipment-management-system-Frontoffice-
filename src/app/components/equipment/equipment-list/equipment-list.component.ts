import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddequipmentComponent } from '../addequipment/addequipment.component';
import { MatDialog } from '@angular/material/dialog';
import { EquipmenthistoryComponent } from '../equipmenthistory/equipmenthistory.component';
import { ReserveEquipmentComponent } from '../reserve-equipment/reserve-equipment.component';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css'],
})
export class EquipmentListComponent implements OnInit {
  /**
   *  id:string
    label : string
    prop_client : boolean 
    status : boolean
    defaults : string
    description : string
    is_calibrated:boolean
    date_calib : Date
    manager : User 

   */
  displayedColumns: string[] = [
    'label',
    'category',
    'prop_client',
    'status',
    'defaults',
    'description',
    'is_calibrated',
    'calibrating_date',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: EquipmentService, private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(AddequipmentComponent, {});
  }

  getAllEquipment() {
    this.api.getEquipment().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error get');
      },
    });
  }
  editEquipment(row: any) {
    this.dialog
      .open(AddequipmentComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllEquipment();
        }
      });
  }
  deleteEquipment(id: string) {
    this.api.deleteEquipment(id).subscribe({
      next: (res) => {
        alert('equipment deleted successfuly');
        this.getAllEquipment();
      },
      error: () => {
        alert('error while deletinf quipment');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllEquipment();
  }
  reserve() {
    const dialogRef = this.dialog.open(ReserveEquipmentComponent, {});
  }
}
