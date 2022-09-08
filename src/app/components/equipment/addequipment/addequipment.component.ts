import {EventEmitter, Component, Inject, OnInit,Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-addequipment',
  templateUrl: './addequipment.component.html',
  styleUrls: ['./addequipment.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddequipmentComponent implements OnInit {
  equipmentForm!:FormGroup;
  actionBtn:string="Add"
  category! :any
  property!:any

  message: string = "updateEquipment"

  constructor(    private changeDetectionRef: ChangeDetectorRef,
    private propertyServices:PropertyService, private categoryServices:CategoryService, public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<AddequipmentComponent>,private _snackBar: MatSnackBar,private router:Router,private route:ActivatedRoute,
    ) { }

    getCategory()
    {
      this.categoryServices.getCategory()
      .subscribe({
        next:(res)=>{
          this.category=res
          
        },
        error:()=>{
          this._snackBar.open(" error get category",'',{ 
            duration: 3000
        })
        }})
    }
    getProperty()
    {
      this.propertyServices.getProperty()
      .subscribe({
        next:(res)=>{
          this.property=res
          
        },
        error:()=>{
          this._snackBar.open(" error get property",'',{ 
            duration: 3000
        })
        }})
    }

  ngOnInit(): void {    
    this.getCategory()
    this.getProperty()
    this.equipmentForm=this.formBuilder.group({
      label:['', Validators.required],
      property:[false],
      conformity:['compliant', Validators.required],
      defaults:[null],
      description:[''],
      maker:[''],
      serial_number:[],
      calibration:['na'],
      validity_date:[null, Validators.prototype],
      category:[, Validators.required],
      other:[null],
     
    })
    if(this.editData){
      this.actionBtn="Update"

      this.equipmentForm.controls['property'].setValue(this.editData.property =='client');
      this.equipmentForm.controls['conformity'].setValue(this.editData.conformity=='Not Compliant' ?'notcompliant':this.editData.conformity);
      this.equipmentForm.controls['defaults'].setValue(this.editData.defaults);
      this.equipmentForm.controls['other'].setValue(this.editData.other);
      this.equipmentForm.controls['label'].setValue(this.editData.label);
      this.equipmentForm.controls['maker'].setValue(this.editData.maker);
      this.equipmentForm.controls['serial_number'].setValue(this.editData.serial_number);
      this.equipmentForm.controls['description'].setValue(this.editData.description);
      this.equipmentForm.controls['calibration'].setValue(this.editData.calibration);
      this.equipmentForm.controls['validity_date'].setValue(this.editData.validity_date);
      this.equipmentForm.controls['category'].setValue(this.editData.category);
    }
  }

  updateEquipment() {
    if (this.equipmentForm.value.property == true) {
      this.equipmentForm.controls['property'].setValue('client');
    } else {
      this.equipmentForm.controls['property'].setValue('sofia');
    }
    this.api
      .patchEquipment(this.equipmentForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          this._snackBar.open('Equipment updated successfuly', '', {
            duration: 3000,
          });
          this.equipmentForm.reset();
          this.dialogRef.close();
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigate(['./'], {
            relativeTo: this.route,
          });
        },
        error: () => {
          this._snackBar.open('error while updating equipment', '', {
            duration: 3000,
          });
        },
      });
  }
  addEquipment() {
    if (!this.editData) {
      if (this.equipmentForm.valid) {

        this.equipmentForm.controls['validity_date'].setValue(
          this.datepipe.transform(
            this.equipmentForm.value.validity_date,
            'yyyy-MM-dd'
          )
        );

        
        this.api.postEquipment(this.equipmentForm.value).subscribe({
          next: (res) => {
            this._snackBar.open('Equipment added successfuly', '', {
              duration: 3000,
            });
            this.changeDetectionRef.detectChanges();
            this.equipmentForm.reset();
            this.dialogRef.close();
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['./'], {
              relativeTo: this.route,
            });
          },
          error: () => {
            this._snackBar.open('error while adding equipment', '', {
              duration: 3000,
            });
          },
        });
      }
    } else {
      this.updateEquipment();
    }
  }
}
