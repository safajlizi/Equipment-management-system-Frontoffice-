import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    default :any
    ref:any
    label:any
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<DetailsComponent>,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

    if(this.editData){
       this.default=this.editData.details.defaults
       this.ref=this.editData.details.ref
       this.label=this.editData.details.label
 

    }


  }

}