import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-availibility',
  templateUrl: './details-availibility.component.html',
  styleUrls: ['./details-availibility.component.css']
})
export class DetailsAvailibilityComponent implements OnInit {

  projectname :any
    liberation:any
    reservation:any
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<DetailsAvailibilityComponent>,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

    if(this.editData){
       this.projectname=this.editData.row.name
       this.liberation=this.editData.lib
       this.reservation=this.editData.res
 

    }


  }
}
