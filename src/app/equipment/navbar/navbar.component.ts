import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{AddequipmentComponent}from '../addequipment/addequipment.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddequipmentComponent,{
      
    });

    
    }
}