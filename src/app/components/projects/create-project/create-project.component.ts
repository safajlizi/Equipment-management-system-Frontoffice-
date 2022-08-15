import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import { ProjectService } from 'src/app/services/project.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectForm!:FormGroup;
  actionBtn:string="save"
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:ProjectService,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<CreateProjectComponent >) { }
  ngOnInit(): void {
    this.projectForm=this.formBuilder.group({
      projectname:['', Validators.required],
      department:['', Validators.required],
  
      name:[null, Validators.required],
      email:[null, Validators.required],
      members:[null]


      
    })
    if(this.editData){
      this.actionBtn="Update"
      this.projectForm.controls['projectname'].setValue(this.editData.projectname);
      this.projectForm.controls['department'].setValue(this.editData.department);
      this.projectForm.controls['name'].setValue(this.editData.name);
      this.projectForm.controls['email'].setValue(this.editData.email);

    }


  }
  
  updateProject(){
    this.api.putProject(this.projectForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Project updated successfuly")
        this.projectForm.reset();
        this.dialogRef.close();
      },
      error:()=>{
        alert("error while updating project")
      }})


  }
  addProject(){
    if(!this.editData){
     
      this.api.postProject(this.projectForm.value)
      .subscribe({
        next:(res)=>{
          alert("Project added successfuly")
          this.projectForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("error while adding project")
        }
      })
     } 
     else{
      this.updateProject()
     }

  } 


}
