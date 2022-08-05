import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-manager-card',
  templateUrl: './manager-card.component.html',
  styleUrls: ['./manager-card.component.css'],
})
export class ManagerCardComponent implements OnInit {
  email: string = '';
  name: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.email = this.data.email;
  }
}
