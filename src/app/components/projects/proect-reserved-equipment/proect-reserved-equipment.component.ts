import { Component, OnInit,Input } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProjectEquipmentAddComponent } from '../project-equipment-add/project-equipment-add.component';
import { ReserveEquipmentComponent } from '../reserve-equipment/reserve-equipment.component';
@Component({
  selector: 'app-proect-reserved-equipment',
  templateUrl: './proect-reserved-equipment.component.html',
  styleUrls: ['./proect-reserved-equipment.component.css']
})
export class ProectReservedEquipmentComponent implements OnInit {

  displayedColumns: string[] = ['label','category','prop_client' ,'status','availibility','manager','is_calibrated','calibrating_date','action'];
  dataSource!: MatTableDataSource<any>;
  selectedE: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  role!: string;
  urlTest: any
  @Input() projectId!: string;

  constructor(private api:EquipmentService,private dialog:MatDialog, private tokenStorage: TokenStorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
     
     }
  openDialog() {
    //const dialogRef = this.dialog.open(AddequipmentComponent,{ });

    
    }
  
   


  getEquipmentById(){
    this.api.getEquipmentByProject(this.projectId)
   .subscribe({
    next:(res)=>{
  

      console.log(res)
          this.dataSource=new MatTableDataSource(res)
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort 
    },
    error:(err)=>{
       alert("error get Equipment of the project")
    }
   })
  }

  editEquipment(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(ProjectEquipmentAddComponent,{
      width:'30%',
      data:row  
    })
    
  }
  deleteEquipment(id:number){
    this.api.deleteEquipment(id).subscribe({
      next:(res)=>{
        alert("equipment deleted successfuly")
        this.getEquipmentById()
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

  this.getEquipmentById()


    if (this.tokenStorage.getToken()) {
     
      this.role = this.tokenStorage.getUser().role;
      console.log(this.tokenStorage.getUser())
    } else {
      this.router.navigateByUrl('/login');
    }
    this.urlTest=this.router.url.includes('/addequipment')
  }

  removeEquipmentfromProject(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(ReserveEquipmentComponent,{
      width:'30%',
      data:{'row':row,'id':this.projectId,'toremove':true}  
    })}


  reserve(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(ReserveEquipmentComponent,{
      width:'30%',
      data:{'row':row,'id':this.projectId,'toremove':true}  
    })}
    

}