import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { EquipmentService } from 'src/app/services/equipment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  equipmentForm!: FormGroup;
  actionBtn: string = "save"
  constructor(public datepipe: DatePipe, private formBuilder: FormBuilder, private api: EquipmentService,
    @Inject(MAT_DIALOG_DATA) public editData: any, private router:Router, private route: ActivatedRoute, private tokenStorage: TokenStorageService,
    private dialogRef: MatDialogRef<DefaultComponent>, private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.equipmentForm = this.formBuilder.group({
      user: [null],
      equipment: [null],
      project: [null],
      description: [null]
    }) 

  }

  addEquipmentProject() {

    if (this.editData) {

      if (this.equipmentForm.valid) {

        this.equipmentForm.controls['equipment'].setValue(this.editData.EquipmentId);

        this.equipmentForm.controls['user'].setValue(this.tokenStorage.getUser().id);
        this.equipmentForm.controls['project'].setValue(this.editData.projectId);


        this.api.declareFaulty(this.equipmentForm.value)
          .subscribe({
            next: (res) => {
              this._snackBar.open("default declared successfuly", '', {
                duration: 3000
              })
              this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
             this.router.navigate(['./'],{
              relativeTo: this.route
        })
              this.equipmentForm.reset();
              this.dialogRef.close();
            },
            error: () => {
              this._snackBar.open("error while declaring equipment default", '', {
                duration: 3000
              })
            }
          })
      }
    }

  }
}
