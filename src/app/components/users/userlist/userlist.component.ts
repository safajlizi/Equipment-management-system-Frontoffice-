import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserhistoryComponent } from '../userhistory/userhistory.component';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['username','email','role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api:UserService,private dialog: MatDialog) { }



  openDialog() {
    const dialogRef = this.dialog.open(UserhistoryComponent,{
      
    });
  }
  getAllUsers(){
    this.api.getUsers()
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
  editUser(row :any){
    this.dialog.open(AddUserComponent,{
      width:'30%',
      data:row  
    }).afterClosed().subscribe(val=>{
      if(val==='update'){this.getAllUsers()}
    })
  }
  deleteUser(id:number){
    this.api.deleteUser(id).subscribe({
      next:(res)=>{
        alert("user deleted successfuly")
        this.getAllUsers()
      },
      error:()=>{
        alert("error while deleting user")
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
    this.getAllUsers()
  }

}
