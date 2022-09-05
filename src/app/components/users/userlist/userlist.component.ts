import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../projects/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['username','firstname','lastname','email','role','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api:UserService,private dialog: MatDialog,private _snackBar: MatSnackBar) { }



  openDialog() {
      
    
  }
  getAllUsers() {
    this.api.getUsers().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this._snackBar.open('error get user','',{ 
          duration: 3000
      });
      },
    });
  }

  editUser(row :any){
    this.dialog.open(AddUserComponent,{
      width:'30%',
      data:row  
    }).afterClosed().subscribe(val=>{
      if(val==='update'){this.getAllUsers()}
    })
  }
  deleteUser(id:string){
    this.api.deleteUser(id).subscribe({
      next:(res)=>{
        this._snackBar.open("user deleted successfuly",'',{ 
          duration: 3000
      })
        this.getAllUsers()
      },
      error:()=>{
        this._snackBar.open("error while deleting user",'',{ 
          duration: 3000
      })
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
  create(){
    const dialogRef = this.dialog.open(AddUserComponent,{
      
    });}
    deleteU(id: number) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { 'id':id ,'user':true}
      });
  
    }
}
