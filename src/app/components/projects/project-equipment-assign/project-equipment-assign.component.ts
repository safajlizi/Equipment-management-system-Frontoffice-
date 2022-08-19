import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-equipment-assign',
  templateUrl: './project-equipment-assign.component.html',
  styleUrls: ['./project-equipment-assign.component.css']
})
export class ProjectEquipmentAssignComponent implements OnInit {

  equipmentId!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.equipmentId = this.data.equipmentId;
  }


}
