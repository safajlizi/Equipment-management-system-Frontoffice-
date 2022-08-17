import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/services/project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ManagerCardComponent } from '../manager-card/manager-card.component';


@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'manager', 'equipment','action'];
  dataSource!: MatTableDataSource<any>;
  initialData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  getAllProjects() {
    this.projectService.getProjects().subscribe({
      next: (res) => {
        this.initialData = res;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error get');
      },
    });
  }
  ngOnInit(): void {
    this.getAllProjects();
  }
  async displayProjectManager(projectId: string) {
    this.projectService.getProjectManager(projectId).subscribe({
      next: (res) => {
        this.dialog.open(ManagerCardComponent, { data: res });
      },
      error: (err) => {
        alert('error get manager');
      },
    });
  }
  getEquipment(projectId: string) {
    this.projectService.getProjectEquipment(projectId).subscribe({
      next: (res) => {
        this.dialog.open(ManagerCardComponent, { data: res });
      },
      error: (err) => {
        alert('error get manager');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue) {
      this.projectService.filter(filterValue).subscribe((res) => {
        this.dataSource.data = res;
      });
    } else {
      this.dataSource.data = this.initialData;
    }
  }
  add(){
    const dialogRef = this.dialog.open(CreateProjectComponent,{
      
    });}

}