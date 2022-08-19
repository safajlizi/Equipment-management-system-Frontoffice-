import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.css']
})
export class ProjectMembersComponent implements OnInit {

  @Input() projectId!: string;
  members: any;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
  }
  removeMember(idM:string) {
    this.projectService.removeProjectMember(this.projectId,idM).subscribe({
      next:(res)=>{
        alert("member  deleted successfuly")
        this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
      },
      error:()=>{
        alert("error while deleting member")
      }
    })
  }

}
