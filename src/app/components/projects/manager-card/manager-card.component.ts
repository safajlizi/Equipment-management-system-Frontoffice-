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
 projectManager :any
  constructor(
    private api: ProjectService,
    private dialog: MatDialog,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)public getData:any,
  ) { }


 getProjectManager(){
  if(this.getData)
  this.api.getProjectManager(this.getData.id).subscribe({
    next: (res) => {
     this.projectManager=res
    

    },
    error: (err) => {
      this._snackBar.open('error get manager','',{ 
        duration: 3000
    });
    },
  });
 }  
 ngOnInit(): void {
  this.getProjectManager()
  }
}
