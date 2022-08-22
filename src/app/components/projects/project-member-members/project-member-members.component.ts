import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-project-member-members',
  templateUrl: './project-member-members.component.html',
  styleUrls: ['./project-member-members.component.css']
})
export class ProjectMemberMembersComponent implements OnInit {


  projectId!: string;
  members: any;
  constructor(private projectService: ProjectService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });}

  ngOnInit(): void {
    this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
  }
  

}

