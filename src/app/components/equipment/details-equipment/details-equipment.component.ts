import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { ConstructorComponent } from '../seetings/constructor/constructor.component';
import { DescriptionComponent } from '../seetings/description/description.component';
import { SerieNumberComponent } from '../seetings/serie-number/serie-number.component';
import { Router,ActivatedRoute  } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-equipment',
  templateUrl: './details-equipment.component.html',
  styleUrls: ['./details-equipment.component.css']
})
export class DetailsEquipmentComponent implements OnInit {
 equipmentId:any
 equipment:any
  constructor(private dialog: MatDialog,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private api: EquipmentService,
    private _snackBar: MatSnackBar ) { 
      route.params.subscribe((params) => {
        this.equipmentId = params['id'];

      });
    }

  ngOnInit(): void {
    this.api.getEquipmentById(this.equipmentId)
    .subscribe({
      next: (res) => {
         this.equipment=res
         },
      error: (err) => {
        this._snackBar.open("error get equipment", '', {
          duration: 3000
        })
      }
    })
  }
  serieNumber() {
    const dialogRef = this.dialog.open(SerieNumberComponent, {
      data: { 'id': this.equipmentId }
    });
  }
  Constructor() {
    const dialogRef = this.dialog.open(ConstructorComponent, {
      data: { 'id': this.equipmentId }
    });
  }
  description() {
    const dialogRef = this.dialog.open(DescriptionComponent, {
      data: { 'id': this.equipmentId }
    });
  }

}
