import { Component, OnInit ,Input} from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { Project } from 'src/app/models/project';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-member-list',
  templateUrl: './project-member-list.component.html',
  styleUrls: ['./project-member-list.component.css']
})
export class ProjectMemberListComponent implements OnInit {

  projects : Project []=[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api:ProjectService,private dialog:MatDialog , private router:Router) { }
  
  getAllProjects(){
    this.api.getProjects()
   .subscribe({
    next:(res)=>{
          this.projects=res
          console.log(this.projects)
    },
    error:(err)=>{
       alert("error get")
    }
   })
  }

  ngOnInit(): void {
    this.getAllProjects()
  }
  ingresar() {

    this.router.navigateByUrl('/dashboard/project')
    
      }

}

