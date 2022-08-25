import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-equipment',
  templateUrl: './reserve-equipment.component.html',
  styleUrls: ['./reserve-equipment.component.css'],
})
export class ReserveEquipmentComponent implements OnInit {
  projectId!: string;
  equipmentForm!: FormGroup;
  actionBtn: string = 'save';
  constructor(
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
    private api: EquipmentService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private dialogRef: MatDialogRef<ReserveEquipmentComponent>,
    private _snackBar: MatSnackBar
  ) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }
  ngOnInit(): void {
    this.equipmentForm=this.formBuilder.group({
      user:[null],
      equipment:[null],
      project:[null],
      description:[null],
      date_lib:[null],

     
     
    })
    if(this.editData.row){
      this.actionBtn="Update"
      
    }
  }

  AddEquipmentProjectmember() {
    this.api
      .patchEquipment(this.equipmentForm.value, this.editData.row.id)
      .subscribe({
        next: (res) => {
          this._snackBar.open('Equipment updated successfuly', '', {
            duration: 3000,
          });
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          this._snackBar.open('error while updating equipment', '', {
            duration: 3000,
          });
        },
      });
  }

  addEquipmentProject() {
    if (!this.editData.reserveUser) {
      if (this.editData && this.editData.toremove == false) {
        if (this.equipmentForm.valid) {
          this.equipmentForm.controls['equipment'].setValue(
            this.editData.row.id
          );

          this.equipmentForm.controls['user'].setValue(
            this.tokenStorage.getUser().id
          );

          this.equipmentForm.controls['project'].setValue(this.editData.id);

          this.api.affectEquipToProject(this.equipmentForm.value).subscribe({
            next: (res) => {
              this._snackBar.open('Equipment added successfuly', '', {
                duration: 3000,
              });
              this.equipmentForm.reset();
              this.dialogRef.close();
            },
            error: () => {
              this._snackBar.open('error while adding equipment', '', {
                duration: 3000,
              });
            },
          });
        }
      } else {
        if (this.equipmentForm.valid) {
          this.equipmentForm.controls['equipment'].setValue(
            this.editData.row.id
          );

          this.equipmentForm.controls['user'].setValue(
            this.tokenStorage.getUser().id
          );

        this.equipmentForm.controls['equipment'].setValue(this.editData.row.id);
       
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
       
        this.equipmentForm.controls['project'].setValue(this.editData.id);
        
        this.api.returnEquipfromProject(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("equipment deleted successfuly",'',{ 
            duration: 3000
        })
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          this._snackBar.open("error while deleting equipment",'',{ 
            duration: 3000
        })
        }
      })
     }}
    
     }
      else{
        if(this.editData.toremove){
          console.log(this.editData.row)
          this.equipmentForm.controls['equipment'].setValue(this.editData.row.id);
       
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
       
        this.equipmentForm.controls['project'].setValue(this.editData.row.project.id);
        
        this.api.returnEquipfromProjectUser(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("equipment deleted successfuly",'',{ 
            duration: 3000
        })
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          this._snackBar.open("error while deleting equipment",'',{ 
            duration: 3000
        })
        }
      })
        }
        else{
        if(this.equipmentForm.valid){
          this.equipmentForm.controls['equipment'].setValue(this.editData.EquipmentId);
          this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
          this.equipmentForm.controls['project'].setValue(this.editData.id);
          alert(this.editData.id)
          
          this.api.affectEquipToProjectUser(this.equipmentForm.value)
        .subscribe({
          next:(res)=>{
            this._snackBar.open("Equipment reserve successfuly",'',{ 
              duration: 3000
          })
            this.equipmentForm.reset();
            this.dialogRef.close();
          },
          error:()=>{
            this._snackBar.open("error whilereservinggg equipment",'',{ 
              duration: 3000
          })
          }
        })
       }}
      }
    }
  }
}
