import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-settings-visibility',
  templateUrl: './settings-visibility.component.html',
  styleUrls: ['./settings-visibility.component.css']
})
export class SettingsVisibilityComponent implements OnInit {
    disabled:any
    enabled:any
    visibility=[]
     keys=[]

  visibilityForm!:FormGroup;
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
   
    private _snackBar: MatSnackBar,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.visibilityForm=this.formBuilder.group({
      label:[false],
      ref:[false],
      property:[false],
      conformity:[false],
      calibration:[false],
      validity_date:[false],
      category:[false],
      availability:[false],
      manager:[false],
      action:[false],
      updated_at:[false],
      created_at:[false],
      deleted_at:[false],
    }  )
    this.api.getVisibility()
    .subscribe({
      next: (res) => {
  this.visibility =res
  this.visibility.forEach((item)=> {
    if(item['visible']){
    this.keys.push(item['field'])
    }
  })
   this.keys.forEach((item)=>{
    this.visibilityForm.controls[item].setValue(true);

   })
   },
      error: (err) => {
        this._snackBar.open("error get visibility", '', {
          duration: 3000
        })
      }
    })
   
  }
  
  updateVisibility(){
    let keys = Object.keys(this.visibilityForm.value)
    this.enabled=keys.filter((element)=>this.visibilityForm.value[element] == true)

    this.disabled=keys.filter((element)=>this.visibilityForm.value[element] == false)

    this.api.updateVisibility({disabled:this.disabled,enabled:this.enabled})
    .subscribe({
      next:(res)=>{

        this._snackBar.open("Visibility updated successfuly",'',{ 
          duration: 3000
      })      
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.router.navigate(['./'],{
        relativeTo: this.route
      })  
      },
      error:()=>{
        this._snackBar.open("error while update visibility",'',{ 
          duration: 3000
      })
      }})
  }
  
}
