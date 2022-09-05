import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ProjectService}from 'src/app/services/project.service'
@Component({
  selector: 'app-manager-card',
  templateUrl: './manager-card.component.html',
  styleUrls: ['./manager-card.component.css']
})
export class ManagerCardComponent implements OnInit {
 manager!: any;
  constructor(@Inject(MAT_DIALOG_DATA)public editData:any, 
  private dialogRef:MatDialogRef<ManagerCardComponent >,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.editData){
      this.manager=this.editData.manager
    }
  }
}
