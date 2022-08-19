import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddequipmentComponent } from '../addequipment/addequipment.component';
import {MatDialog} from '@angular/material/dialog';
import { ReserveComponent } from '../reserve/reserve.component';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
 
  displayedColumns: string[] = ['id','label','category','prop_client','availability' ,'status','manager','is_calibrated','calibrating_date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  role!: string;



  constructor(private api:EquipmentService,private dialog:MatDialog, private tokenStorage: TokenStorageService,
    private router: Router) { }
  openDialog() {
    const dialogRef = this.dialog.open(AddequipmentComponent,{
      
    });

    
    }

  getAllEquipment(){
    this.api.getEquipment()
   .subscribe({
    next:(res)=>{
          this.dataSource=new MatTableDataSource(res)
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort 
    },
    error:(err)=>{
       alert("error get")
    }
   })
  }
  editEquipment(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(AddequipmentComponent,{
      width:'30%',
      data:row  
    }).afterClosed().subscribe(val=>{
      if(val==='update'){this.getAllEquipment()}
    })
  }
  deleteEquipment(id:number){
    this.api.deleteEquipment(id).subscribe({
      next:(res)=>{
        alert("equipment deleted successfuly")
        this.getAllEquipment()
      },
      error:()=>{
        alert("error while deletinf quipment")
      }
    })
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
     
      this.role = this.tokenStorage.getUser().role;
      console.log(this.tokenStorage.getUser())
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  reserve(){
    const dialogRef = this.dialog.open(ReserveComponent,{
      
    });
  

}
}