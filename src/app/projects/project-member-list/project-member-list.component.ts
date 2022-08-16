import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-member-list',
  templateUrl: './project-member-list.component.html',
  styleUrls: ['./project-member-list.component.css'],
})
export class ProjectMemberListComponent implements OnInit {
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
  removeMember() {
    this.projectService;
  }
}
