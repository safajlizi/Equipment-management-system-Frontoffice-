import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/services/project.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { ManagerCardComponent } from '../manager-card/manager-card.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MemberCardComponent } from '../member-card/member-card.component';


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
    private dialog: MatDialog,
    private api :ProjectService,private _snackBar: MatSnackBar
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
        this._snackBar.open('error ge projects','',{ 
          duration: 3000
      });
      },
    });
  }
  deleteProject(id:string){
    this.api.deleteProject(id).subscribe({
      next:(res)=>{
        this._snackBar.open("project deleted successfuly",'',{ 
          duration: 3000
      })
        this.getAllProjects()
      },
      error:()=>{
        this._snackBar.open("error while deleting project",'',{ 
          duration: 3000
      })
      }
    })
  }
  ngOnInit(): void {
    this.getAllProjects();
  }


  async displayProjectManager(row:any) {
    

    const dialogRef = this.dialog.open(ManagerCardComponent,{
      data:{'manager':row, 'toremove':false }  
    });

  }

  getEquipment(projectId: string) {
    const dialogRef = this.dialog.open(MemberCardComponent,{
      data:{'id':projectId }  
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
    editProject(row :any){
      this.dialog.open(CreateProjectComponent,{
        width:'30%',
        data:row  
        
      }).afterClosed().subscribe(val=>{
        if(val==='update'){this.getAllProjects()}
      })
    }

}