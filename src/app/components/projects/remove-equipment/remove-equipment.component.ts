import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-remove-equipment',
  templateUrl: './remove-equipment.component.html',
  styleUrls: ['./remove-equipment.component.css'],
})
export class RemoveEquipmentComponent implements OnInit {
  equipmentForm!: FormGroup;
  actionBtn: string = 'save';
  projectId: any;
  constructor(
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
    private api: EquipmentService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private dialogRef: MatDialogRef<RemoveEquipmentComponent>,
    private _snackBar: MatSnackBar
  ) {
    route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
  }
  ngOnInit(): void {
    this.equipmentForm = this.formBuilder.group({
      user: [null],
      equipment: [null],
      project: [null],
      description: [''],
    });
  }

  removeEquipment() {
    if (this.editData) {
      if (this.editData.isManager) {
        if (this.equipmentForm.valid) {
          this.equipmentForm.controls['equipment'].setValue(
            this.editData.row.id
          );

          this.equipmentForm.controls['user'].setValue(
            this.tokenStorage.getUser().id
          );

          this.equipmentForm.controls['project'].setValue(this.editData.id);

          this.api
            .returnEquipfromProject(this.equipmentForm.value)

            .subscribe({
              next: (res) => {
                this._snackBar.open('equipment deleted successfuly', '', {
                  duration: 3000,
                });
              
                this.equipmentForm.reset();
                this.dialogRef.close();
                this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
                this.router.navigate(['/dashboard/projects/equipment/'+this.editData.id],{
                  relativeTo: this.route
                })
              },
              error: () => {
                this._snackBar.open('error while deleting equipment', '', {
                  duration: 3000,
                });
              },
            });
       
        }
      }
      else{
        
          if (this.equipmentForm.valid) {
            this.equipmentForm.controls['equipment'].setValue(
              this.editData.row.id
            );
  
            this.equipmentForm.controls['user'].setValue(
              this.tokenStorage.getUser().id
            );
  
            this.equipmentForm.controls['project'].setValue(this.editData.id);
  
            this.api
              .returnEquipfromProjectUser(this.equipmentForm.value)
  
              .subscribe({
                next: (res) => {
                  this._snackBar.open('equipment deleted successfuly', '', {
                    duration: 3000,
                  });
                  this.equipmentForm.reset();
                  this.dialogRef.close();
                  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                  this.router.navigate(['/dashboard/projects/member/equipment/'+this.editData.id], {
                    relativeTo: this.route,
                  });
                },
                error: () => {
                  this._snackBar.open('error while deleting equipment', '', {
                    duration: 3000,
                  });
                },
              });
            this.equipmentForm.reset();
            this.dialogRef.close();
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['./'], {
              relativeTo: this.route,
            });
          }
      }}
    }
  }

