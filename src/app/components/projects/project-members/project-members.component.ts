import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  @Input() projectId!: string;
  members: any;
  role:any
  constructor(private projectService: ProjectService,private _snackBar: MatSnackBar, private tokenStorage:TokenStorageService) {}

  ngOnInit(): void {
    this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
       
        this.members = response;
      });
      if (this.tokenStorage.getToken()) {
        this.role = this.tokenStorage.getUser().role;
      } 
     
      
  }
  removeMember(idM:string) {
    this.projectService.removeProjectMember(this.projectId,idM).subscribe({
      next:(res)=>{
        this._snackBar.open("member  deleted successfuly",'',{ 
          duration: 3000
      })
        this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
      },
      error:()=>{
        this._snackBar.open("error while deleting member",'',{ 
          duration: 3000
      })
      }
    })
  }

}
