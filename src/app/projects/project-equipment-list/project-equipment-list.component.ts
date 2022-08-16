import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectEquipmentAssignComponent } from '../project-equipment-assign/project-equipment-assign.component';

@Component({
  selector: 'app-project-equipment-list',
  templateUrl: './project-equipment-list.component.html',
  styleUrls: ['./project-equipment-list.component.css'],
})
export class ProjectEquipmentListComponent implements OnInit {
  @Input() projectId!: string;
  equipment: any;
  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projectService.getProjectEquipment(this.projectId).subscribe(
      (response) => {
        this.equipment = response;
      },
      (error) => {
        alert(error.message);
      }
    );
  }
  remove(equipmentId: string) {
    this.projectService
      .removeProjectEquipment(this.projectId, equipmentId)
      .subscribe(
        (response) => {
          alert('Equipment returned succesfully.');
        },
        (error) => {
          alert(error.message);
        }
      );
  }
  assign(equipmentId: string) {
    this.dialog.open(ProjectEquipmentAssignComponent, {
      data: { equipmentId: equipmentId },
    });
  }
}
