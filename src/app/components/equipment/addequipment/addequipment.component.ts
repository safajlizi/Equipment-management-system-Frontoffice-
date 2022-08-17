import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
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
    private dialogRef:MatDialogRef<AddequipmentComponent>) { }
  ngOnInit(): void {
    this.equipmentForm=this.formBuilder.group({
      label:['', Validators.required],
      prop_client:[false],
      availability:[false],
      status:['Compliant state', Validators.required],
      description:[null],
      descriptionStatus:[null],
      is_calibrated:[false],
      calibrating_date:[null, Validators.prototype],
      category:[null, Validators.required],
      other:[null],
      manager:[null]
      
     
    })
    if(this.editData){
      this.actionBtn="Update"
      this.equipmentForm.controls['label'].setValue(this.editData.label);
      this.equipmentForm.controls['prop_client'].setValue(this.editData.prop_client);
      this.equipmentForm.controls['status'].setValue(this.editData.status);
      this.equipmentForm.controls['availability'].setValue(this.editData.status);
      this.equipmentForm.controls['descriptionStatus'].setValue(this.editData.descriptionStatus);
      this.equipmentForm.controls['other'].setValue(this.editData.other);

      this.equipmentForm.controls['description'].setValue(this.editData.description);
      this.equipmentForm.controls['is_calibrated'].setValue(this.editData. is_calibrated);
      this.equipmentForm.controls['calibrating_date'].setValue(this.editData.calibrating_date);
      this.equipmentForm.controls['category'].setValue(this.editData.category);

    }


  }
  
  updateEquipment(){
  
    this.api.patchEquipment(this.equipmentForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Equipment updated successfuly")
        this.equipmentForm.reset();
        this.dialogRef.close();
      },
      error:()=>{
        alert("error while updating equipment")
      }})


  }
  addEquipment(){
    if(!this.editData){
      if(this.equipmentForm.valid){
        this.equipmentForm.controls['calibrating_date'].setValue(this.datepipe.transform(this.equipmentForm.value.calibrating_date, 'yyyy-MM-dd') )
       
      this.api.postEquipment(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          alert("Equipment added successfuly")
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error while adding equipment")
        }
      })
     } }
     else{
      this.updateEquipment()
     }

  } 


}
 