import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  projectId!: string;
  equipments:any
  size=0
  constructor(@Inject(MAT_DIALOG_DATA)public editData:any, private api:EquipmentService,
  private dialogRef:MatDialogRef<MemberCardComponent >,private _snackBar: MatSnackBar) { }
  getEquipmentById(){
    this.api.getEquipmentByProject(this.projectId)
   .subscribe({
    next:(res)=>{
    this.equipments=res
    if(this.equipments.length){this.size=this.equipments.length}

    },
    error:(err)=>{
      this._snackBar.open("error get Equipment of the project",'',{ 
        duration: 3000
    })
    }
   })
  }
  ngOnInit(): void {

    if(this.editData)
    {
      this.projectId=this.editData.id 
      this.api.getEquipmentByProject(this.projectId)
      .subscribe({
       next:(res)=>{
       this.equipments=res
       },
       error:(err)=>{
         this._snackBar.open("error get Equipment of the project",'',{ 
           duration: 3000
       })
       }
      });
    }
 
  }

}
