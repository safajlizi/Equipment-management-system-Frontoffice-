import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  displayedColumns: string[] = ['projectname','department','name', 'email','action' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api:ProjectService,private dialog:MatDialog) { }
  
  getAllProjects(){
    this.api.getProjects()
   .subscribe({
    next:(res)=>{
          this.dataSource=new MatTableDataSource(res)
          this.dataSource.paginator=this.paginator
          this.dataSource.sort=this.sort 
    },
    error:(err)=>{
       alert("error get")
    }
   })
  }
  editProject(row :any){
    this.dialog.open(CreateProjectComponent,{
      width:'30%',
      data:row  
    }).afterClosed().subscribe(val=>{
      if(val==='update'){this.getAllProjects()}
    })
  }
  deleteProject(id:number){
    this.api.deleteProject(id).subscribe({
      next:(res)=>{
        alert("Project deleted successfuly")
        this.getAllProjects()
      },
      error:()=>{
        alert("error while deleting project")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getAllProjects()
  }

  reserve(){
    const dialogRef = this.dialog.open(CreateProjectComponent,{
      
    });
  

}
}