import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-history',
  templateUrl: './project-history.component.html',
  styleUrls: ['./project-history.component.css'],
})
export class ProjectHistoryComponent implements OnInit {
  projectId!: string;
  history: any;
  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {
    this.historyService
      .getHistoryByProject(this.projectId)
      .subscribe((res) => (this.history = res));
  }
}
