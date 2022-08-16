import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addequipment',
  templateUrl: './addequipment.component.html',
  styleUrls: ['./addequipment.component.css'],
})
export class AddequipmentComponent implements OnInit {
  equipmentForm!: FormGroup;
  actionBtn: string = 'save';
  constructor(
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private api: EquipmentService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddequipmentComponent>
  ) {}
  ngOnInit(): void {
    this.equipmentForm = this.formBuilder.group({
      label: ['', Validators.required],
      prop_client: ['', Validators.required],
      status: [false],
      description: [''],
      defaults: [false],
      is_calibrated: [false],
      calibrating_date: [null, Validators.prototype],
      manager: [null],
    });
    if (this.editData) {
      this.actionBtn = 'Update';
    }
  }
  addEquipment(){
    if(!this.editData){
      if(this.equipmentForm.valid){
        this.equipmentForm.controls['calibrating_date'].setValue(this.datepipe.transform(this.equipmentForm.value.calibrating_date, 'yyyy-MM-dd') )
          this.equipmentForm.value.calibrating_date
      this.api.postEquipment(this.equipmentForm.value)
      .subscribe({
        next: (res) => {
          alert('Equipment updated successfuly');
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert('error while updating equipment');
        },
      });
  }
  addEquipment() {
    if (!this.editData) {
      if (this.equipmentForm.valid) {
        this.api.postEquipment(this.equipmentForm.value).subscribe({
          next: (res) => {
            alert('Equipment added successfuly');
            this.equipmentForm.reset();
            this.dialogRef.close();
          },
          error: () => {
            alert('error while adding equipment');
          },
        });
      }
    } else {
      this.updateEquipment();
    }
  }
}
