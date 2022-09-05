import { Component, OnInit  } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import {ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddequipmentComponent } from '../addequipment/addequipment.component';
import { MatDialog } from '@angular/material/dialog';
import { ReserveComponent } from '../reserve/reserve.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { DetailsComponent } from '../details/details.component';
import { UserService } from 'src/app/services/user.service';
import { DetailsAvailibilityComponent } from '../details-availibility/details-availibility.component';
import { ConfirmationDialogComponent } from '../../projects/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  displayedColumns!: string[] ;
  columns=['ref', 'label',  'property','category', 'conformity','availability', 'manager', 'calibration', 'validity_date','created_at','updated_at','deleted_at','action'];
  dataSource!: MatTableDataSource<any>;
  visibility!:[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
    role!: string;
  user!: any
  size = 0

  constructor(private api: EquipmentService, private dialog: MatDialog, private tokenStorage: TokenStorageService,
    private router: Router, private _snackBar: MatSnackBar, private userService: UserService) { }
  openDialog() {
    const dialogRef = this.dialog.open(AddequipmentComponent, {

    });

  }
  
  getAllEquipment() {
    this.api.getEquipment()
      .subscribe({
        next: (res) => {

          this.dataSource = new MatTableDataSource(res)
          this.dataSource.paginator = this.paginator
          
          this.sort.sort(
            {id:'',start:'asc',disableClear : false}
          )        },
        error: (err) => {
          this._snackBar.open("error get equipment", '', {
            duration: 3000
          })
        }
      })
  }
  getVisibility() {
    this.api.getVisibility()
      .subscribe({
        next: (res) => {
    this.visibility =res

    let keys=[]
    this.visibility.forEach((item)=> {
      if(item['visible']){
         keys.push(item['field'])
      }
    })
    keys.push('action')
    keys.sort((obj1,obj2)=>this.columns.indexOf(obj1)- this.columns.indexOf(obj2))
    this.displayedColumns=keys
                 },
        error: (err) => {
          this.displayedColumns= ['ref', 'label',  'property','category', 'conformity','availability', 'manager', 'calibration', 'validity_date','action']

        }
      })
  }

  editEquipment(row: any) {
    if (row.other) {
      row.set
    }
    this.dialog.open(AddequipmentComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') { this.getAllEquipment() }
    })
  }
  deleteEquipment(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { 'id':id,'equipment':true }
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
    this.getAllEquipment()
    if (this.tokenStorage.getToken()) {

      this.user = this.tokenStorage.getUser();
      this.role = this.user.role
    } else {
      this.router.navigateByUrl('/login');
    }
    this.userService.getManagedProjects(this.user.id).subscribe({
      next: (res) => {
        this.size = res.length
      }
    })
    this.getVisibility()
  }

  reserve(row: any) {
    const dialogRef = this.dialog.open(ReserveComponent, {
      data: { 'EquipmentId': row, 'toremove': false }
    });


  }
  details(row: any) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: { 'details': row }
    });


  }
  detailsAvailibility(row: any, lib:any) {
    const dialogRef = this.dialog.open(DetailsAvailibilityComponent, {
      data: { 'row': row,'lib':lib }
    });


  }
}