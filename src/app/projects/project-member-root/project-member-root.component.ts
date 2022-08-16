import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-member-root',
  templateUrl: './project-member-root.component.html',
  styleUrls: ['./project-member-root.component.css'],
})
export class ProjectMemberRootComponent implements OnInit {
  listOrAdd: boolean = true;
  projectId!: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {}
  switch() {
    this.listOrAdd = !this.listOrAdd;
  }
}
