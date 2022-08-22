import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router,ActivatedRoute  } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  projectId!: string;
  equipmentForm!:FormGroup;
  actionBtn:string="save"
  memberProjects: any;
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any,  private route: ActivatedRoute, private tokenStorage: TokenStorageService,  private userService: UserService,
    private dialogRef:MatDialogRef<ReserveComponent>,
    private _snackBar: MatSnackBar) { 
      route.params.subscribe((params) => {
        this.projectId = params['id'];

      });
      let user = this.tokenStorage.getUser();
   
    this.userService.getMemberProjects(user.id).subscribe((res) => {
      this.memberProjects = res;
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

  addEquipmentProject(){
  
    if(this.editData ){

      if(this.equipmentForm.valid){
      
        this.equipmentForm.controls['equipment'].setValue(this.editData.EquipmentId);
     
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);

       
      

        this.api.affectEquipToProject(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("Equipment added successfuly")
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          this._snackBar.open("error while adding equipment")
        }
      })
     } }
     else{
      if(this.equipmentForm.valid){

        this.equipmentForm.controls['equipment'].setValue(this.editData.row.Equipment_id);
       
        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
       
        this.equipmentForm.controls['project'].setValue(this.editData.id);
        
        this.api.returnEquipfromProject(this.equipmentForm.value)
      .subscribe({
        next:(res)=>{
          this._snackBar.open("equipment deleted successfuly")
          this.equipmentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          this._snackBar.open("error while deleting equipment")
        }
      })
     }}
    
  } 

}