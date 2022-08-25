import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'

@Component({
  selector: 'app-addequipment',
  templateUrl: './addequipment.component.html',
  styleUrls: ['./addequipment.component.css']
})
export class AddequipmentComponent implements OnInit {
  equipmentForm!:FormGroup;
  actionBtn:string="save"
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<AddequipmentComponent>,private _snackBar: MatSnackBar,private router:Router) { }
  ngOnInit(): void {
    this.equipmentForm=this.formBuilder.group({
      label:['', Validators.required],

      property:[false],
      conformity:['compliant', Validators.required],
      defaults:[null],
      description:[''],
      calibration:['nok'],
      validity_date:[null, Validators.prototype],
      category:[null, Validators.required],
      other:[null],
      manager:[]
     
    })
    if(this.editData){
      this.actionBtn="Update"
      this.equipmentForm.controls['label'].setValue(this.editData.label);

      this.equipmentForm.controls['property'].setValue(this.editData.property);
      this.equipmentForm.controls['conformity'].setValue(this.editData.conformity);
      this.equipmentForm.controls['defaults'].setValue(this.editData.defaults);
      this.equipmentForm.controls['other'].setValue(this.editData.other);

      this.equipmentForm.controls['calibration'].setValue(this.editData.calibration);
      this.equipmentForm.controls['validity_date'].setValue(this.editData.validity_date);
      this.equipmentForm.controls['category'].setValue(this.editData.category);

    }


  }
  
  updateEquipment(){
    if(this.equipmentForm.value.property == true ){this.equipmentForm.controls['property'].setValue('client')}
    else{this.equipmentForm.controls['property'].setValue('sofia')}
    this.api.patchEquipment(this.equipmentForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this._snackBar.open("Equipment updated successfuly",'',{ 
          duration: 3000
      })
        this.equipmentForm.reset();
        this.dialogRef.close();
        
      },
      error:()=>{
        this._snackBar.open("error while updating equipment",'',{ 
          duration: 3000
      })
      }})


  }
  addEquipment(){
    if(!this.editData){
       if(this.equipmentForm.valid){
        

        this.equipmentForm.controls['validity_date'].setValue(this.datepipe.transform(this.equipmentForm.value.validity_date, 'yyyy-MM-dd') )
        if(this.equipmentForm.value.property == true ){this.equipmentForm.controls['property'].setValue('client')}
        else{this.equipmentForm.controls['property'].setValue('sofia')}
        if(this.equipmentForm.value.other ){this.equipmentForm.controls['category'].setValue(this.equipmentForm.value.other)}
      this.api.postEquipment(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("Equipment added successfuly",'',{ 
            duration: 3000
        })
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          this._snackBar.open("error while adding equipment",'',{ 
            duration: 3000
        })
        }
      })
     } }
     else{
      this.updateEquipment()
     }

  } 


}
 