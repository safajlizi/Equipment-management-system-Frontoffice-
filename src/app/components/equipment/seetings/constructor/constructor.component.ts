import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute , Router} from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {

  constructorForm!: FormGroup;
  equipmentId: any;
  message = '';
  constructor(
    private fb: FormBuilder,
    private api: EquipmentService,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<ConstructorComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router,private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA)public editData:any
  ) {
    
    this.constructorForm = this.fb.group({
      constructor: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  save() {
    this.api.patchEquipment({maker:this.constructorForm.value.constructor},this.editData.id)
    
      .subscribe(
        (res) => {
          this._snackBar.open("serieNumber updated successfuly",'',{ 
            duration: 3000
        })
         
          this.constructorForm.reset()
          this.dialogRef.close();
          this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
          this.router.navigate(['./'],{
            relativeTo: this.route
          })
        },
        (err) => {
          this._snackBar.open("error while updating serieNumber ",'',{ 
            duration: 3000
        })
        }
      );}}