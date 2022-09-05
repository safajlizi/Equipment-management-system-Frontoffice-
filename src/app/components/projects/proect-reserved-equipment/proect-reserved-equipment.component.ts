import { Component, OnInit,Input } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Router,ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProjectEquipmentAddComponent } from '../project-equipment-add/project-equipment-add.component';
import { ReserveEquipmentComponent } from '../reserve-equipment/reserve-equipment.component';
import { DefaultComponent } from '../../equipment/default/default.component';
import { DetailsComponent } from '../../equipment/details/details.component';
import { RemoveEquipmentComponent } from '../remove-equipment/remove-equipment.component';
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
    private route: ActivatedRoute
    ,private _snackBar: MatSnackBar) {
     
     }

  getEquipmentById(){
    this.api.getEquipmentByProject(this.projectId)
   .subscribe({
    next:(res)=>{
          this.dataSource=new MatTableDataSource(res)
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort 
    },
    error:(err)=>{
      this._snackBar.open("error get Equipment of the project",'',{ 
        duration: 3000
    })
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
        this._snackBar.open("equipment deleted successfuly",'',{ 
          duration: 3000
      })
        this.getEquipmentById()
      },
      error:()=>{
        this._snackBar.open("error while deletinf quipment",'',{ 
          duration: 3000
      })
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
    } else {
      this.router.navigateByUrl('/login');
    }
    this.urlTest=this.router.url.includes('/addequipment')
  }

  removeEquipmentfromProject(row :any){
    
    if(row.other){
      row.set
    }
        this.dialog.open(RemoveEquipmentComponent,{
      
      data:{'row':row,'id':this.projectId,'isManager':true}  
    })}


  reserve(row :any){
    if(row.other){
      row.set
    }
        this.dialog.open(ReserveEquipmentComponent,{
      width:'30%',
      data:{'row':row,'id':this.projectId,'toremove':true}  
    })}
    details(row: any) {
      const dialogRef = this.dialog.open(DetailsComponent, {
        data: { 'details': row, }
      });
  
    }
      default(row: any){
        const dialogRef = this.dialog.open(DefaultComponent,{
          data:{'EquipmentId':row, 'projectId':this.projectId  }  
        });}

}
