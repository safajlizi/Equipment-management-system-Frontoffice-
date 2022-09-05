import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Router,ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-project-member-members',
  templateUrl: './project-member-members.component.html',
  styleUrls: ['./project-member-members.component.css']
})
export class ProjectMemberMembersComponent implements OnInit {

  projectId!: string;
  members: any;
  role:any
  displayedColumns: string[] = ['username','firstname','lastname','email','role'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  constructor(private api:UserService,private dialog: MatDialog,private route :ActivatedRoute ,private projectService: ProjectService,private _snackBar: MatSnackBar, private tokenStorage:TokenStorageService) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }

  ngOnInit(): void {
    this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      if (this.tokenStorage.getToken()) {
        this.role = this.tokenStorage.getUser().role;
      } 
     
      
  }


  getAllUsers() {
    this.api.getUsers().subscribe({
      next: (res) => {
       
      },
      error: (err) => {
        this._snackBar.open('error get user','',{ 
          duration: 3000
      });
      },
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  removeMember(idM:string) {
    this.projectService.removeProjectMember(this.projectId,idM).subscribe({
      next:(res)=>{
        this._snackBar.open("member  deleted successfuly",'',{ 
          duration: 3000
      })
        this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
      },
      error:()=>{
        this._snackBar.open("error while deleting member",'',{ 
          duration: 3000
      })
      }
    })
  }
  /*projectId!: string;
  members: any;
  constructor(private projectService: ProjectService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });}

  ngOnInit(): void {
    this.projectService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.members = response;
      });
  }
  */

}

