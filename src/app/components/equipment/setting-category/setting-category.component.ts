import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'

@Component({
  selector: 'app-setting-category',
  templateUrl: './setting-category.component.html',
  styleUrls: ['./setting-category.component.css']
})
export class SettingCategoryComponent implements OnInit {
  categoryForm!:FormGroup;
  int= [1,2,3,4,5]
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    private _snackBar: MatSnackBar,private router:Router) { }
  ngOnInit(): void {
    this.categoryForm=this.formBuilder.group({
     category:[''],
     
    })

  }
  
  addCategory(){
    if(this.categoryForm.valid){


  }}
}