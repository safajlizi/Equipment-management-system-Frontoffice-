import { Component, Inject, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators,FormControl} from'@angular/forms'
import { ProjectService } from 'src/app/services/project.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  initialData: any;
  projectForm!:FormGroup;
  actionBtn:string="save"
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,private api:ProjectService,private router: Router,
    @Inject(MAT_DIALOG_DATA)public editData:any, 
    private dialogRef:MatDialogRef<CreateProjectComponent >) { }
  ngOnInit(): void {
    this.projectForm=this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      manager: new FormControl('', [Validators.required, Validators.email])



      
    })
    if(this.editData){
      this.actionBtn="Update"
      this.projectForm.controls['name'].setValue(this.editData.projectname);
      this.projectForm.controls['manager'].setValue(this.editData.name);

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
 
     
      if (this.projectForm.valid) {
        this.api.postProject(this.projectForm.value).subscribe({
          next: (res) => {
            this.projectForm.reset();
            this.dialogRef.close();
            
          },
          error: (error) => {
            alert('error while adding equipment' + error.message);
          },
        });
      }
    }

  }
