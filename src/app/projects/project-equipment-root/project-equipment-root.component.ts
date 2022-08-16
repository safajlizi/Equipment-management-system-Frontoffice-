import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-equipment-root',
  templateUrl: './project-equipment-root.component.html',
  styleUrls: ['./project-equipment-root.component.css'],
})
export class ProjectEquipmentRootComponent implements OnInit {
  projectId!: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {}
}
