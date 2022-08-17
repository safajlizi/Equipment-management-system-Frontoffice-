import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import {HistoryService } from 'src/app/services/history.service';
import { ProjectService } from 'src/app/services/project.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DatePipe } from '@angular/common'
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  projects : Project []=[]
  reserveForm!:FormGroup;
  actionBtn:string="save"
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:HistoryService,private apiProject: ProjectService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<ReserveComponent>) { }
    getAllProjects(){
      this.apiProject.getProjects()
     .subscribe({
      next:(res)=>{
            this.projects=res
            console.log(this.projects)
      },
      error:(err)=>{
         alert("error get projectss ")
      }
     })
    }
  ngOnInit(): void {
    this.reserveForm=this.formBuilder.group({
      label:['', Validators.required],
      availability:[false],
      status:['Compliant state', Validators.required],
      description:[null],
      descriptionStatus:[null],
      createdby:['admin'],
      project:[null,Validators.required],
      date_lib:[null,Validators.required],
      date_res:[null,Validators.required]

      
    })
    


  }
  
  
  addHistory(){
   
      if(this.reserveForm.valid){
        this.reserveForm.controls['date_lib'].setValue(this.datepipe.transform(this.reserveForm.value.calibrating_date, 'yyyy-MM-dd') )
        this.reserveForm.controls['date_res'].setValue(this.datepipe.transform(this.reserveForm.value.calibrating_date, 'yyyy-MM-dd') )

      this.api.postHistory(this.reserveForm.value)
      .subscribe({
        next:(res)=>{
          alert("history added successfuly")
          this.reserveForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error while adding history")
        }
      })
     } 
     

  }
}
