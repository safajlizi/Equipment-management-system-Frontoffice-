import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservationChangeForm!: FormGroup;
  user: any;
  message = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,

    private fb: FormBuilder,
    private api: EquipmentService,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<UpdateReservationComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router, private route:ActivatedRoute
  ) {
    this.reservationChangeForm = this.fb.group({
      date_res: [],
      date_lib:[]
    });
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
    if(this.editData)
    { 
    
      this.reservationChangeForm.controls['date_res'].setValue(this.editData.row.date_res );
      this.reservationChangeForm.controls['date_lib'].setValue(this.editData.row.date_lib );

    }
  }
  save() {
if(this.editData){
    this.api.updateReservation({user:this.user.id,equipment:this.editData.row.id,date_lib:this.reservationChangeForm.value.date_lib,date_res:this.reservationChangeForm.value.date_res})
      .subscribe(
        (res) => {
          this._snackBar.open("dates  updated successfuly",'',{ 
            duration: 3000
        })
          this.tokenStorage.editUser('username', res.username);
          this.reservationChangeForm.reset()
          this.dialogRef.close();
          this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
          this.router.navigate(['/dashboard/profile'],{
            relativeTo: this.route
          })
        },
        (err) => {
          this._snackBar.open("error update date!",'',{ 
            duration: 3000
        })
        }
      );
  }}
}
