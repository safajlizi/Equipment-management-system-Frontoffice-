import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-navbar-project',
  templateUrl: './navbar-project.component.html',
  styleUrls: ['./navbar-project.component.css']
})
export class NavbarProjectComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateProjectComponent,{
      
    });}
}
