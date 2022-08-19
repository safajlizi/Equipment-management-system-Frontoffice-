import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router,ActivatedRoute  } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'

@Component({
  selector: 'app-reserve-equipment',
  templateUrl: './reserve-equipment.component.html',
  styleUrls: ['./reserve-equipment.component.css']
})
export class ReserveEquipmentComponent implements OnInit {

  projectId!: string;
  equipmentForm!:FormGroup;
  actionBtn:string="save"
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any,  private route: ActivatedRoute, private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<ReserveEquipmentComponent>) { 
      route.params.subscribe((params) => {
        this.projectId = params['id'];
        console.log('dddddddddd')
        console.log(params['id'])
      });

    }
  ngOnInit(): void {
    this.equipmentForm=this.formBuilder.group({
      user:[null],
      equipment:[null],
      project:[null],
      description:[null],
     
     
    })
    if(this.editData.row){
      this.actionBtn="Update"
      
    }


  }
  
 AddEquipmentProjectmember(){
  
    this.api.patchEquipment(this.equipmentForm.value,this.editData.row.id)
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

  addEquipmentProject(){
    if(this.editData && this.editData.toremove ==false){
      if(this.equipmentForm.valid){
      
        this.equipmentForm.controls['equipment'].setValue(this.editData.EquipmentId);
        console.log('ewuipment')

        console.log(this.editData.row)
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
        console.log('userr*****')

        console.log(this.tokenStorage.getUser().id)
        this.equipmentForm.controls['project'].setValue(this.editData.id);
        console.log('project')
        console.log("//////////////////////////////////////")

        console.log(this.editData.id)
        console.log("7777777777777777777777777777777777777777")

        console.log(this.equipmentForm.value)
        this.api.affectEquipToProject(this.equipmentForm.value)
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
      if(this.equipmentForm.valid){
      
        this.equipmentForm.controls['equipment'].setValue(this.editData.row.Equipment_id);
        console.log('ewuipment')

        console.log(this.editData.row)
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
        console.log('userr*****')

        console.log(this.tokenStorage.getUser().id)
        this.equipmentForm.controls['project'].setValue(this.editData.id);
        console.log('project')

        console.log(this.editData.id)
        this.api.returnEquipfromProject(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          alert("equipment deleted successfuly")
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error while deleting equipment")
        }
      })
     }
     }
     
  } 

}
