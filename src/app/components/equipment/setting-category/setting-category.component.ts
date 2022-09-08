import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'
import { CategoryService } from 'src/app/services/category.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-setting-category',
  templateUrl: './setting-category.component.html',
  styleUrls: ['./setting-category.component.css']
})
export class SettingCategoryComponent implements OnInit {
  categoryForm!:FormGroup;
  propertyForm!:FormGroup
  int= [1,2,3,4,5]
  int2= [1,2,3,4,5,5,6,7,8,9]
  category!:any
  property!:any 
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    private _snackBar: MatSnackBar,private router:Router,private categoryServices :CategoryService,
    private propertyServices:PropertyService) { }
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
    this.categoryForm=this.formBuilder.group({
     name:['',Validators.required],
     description:[null]
    })
    this.propertyForm=this.formBuilder.group({
      name:['',Validators.required],
     })
     this.getCategory()
     this.getProperty()
  }
  
  addCategory(){
    if(this.categoryForm.valid){

    this.categoryServices.postCategoy(this.categoryForm.value).subscribe({
          next: (res) => {
            this._snackBar.open('Category added successfuly', '', {
              duration: 3000,
            });
            this.categoryForm.reset();
            this.getCategory()
          },
          error: () => {
            this._snackBar.open('error while adding category', '', {
              duration: 3000,
            });
          },
        });
      }

  }
  addProperty(){
    if(this.propertyForm.valid){

    this.propertyServices.postProperty(this.propertyForm.value).subscribe({
          next: (res) => {
            this._snackBar.open('Property added successfuly', '', {
              duration: 3000,
            });
            this.categoryForm.reset();
            this.getProperty()
          },
          error: () => {
            this._snackBar.open('Error while adding property', '', {
              duration: 3000,
            });
          },
        });
      }

  }
}
