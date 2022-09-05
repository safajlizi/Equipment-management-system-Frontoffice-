import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-serie-number',
  templateUrl: './serie-number.component.html',
  styleUrls: ['./serie-number.component.css']
})
export class SerieNumberComponent implements OnInit {

  serieNumberForm!: FormGroup;
  equipmentId:any
  constructor(
    private fb: FormBuilder,
    private api: EquipmentService,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<SerieNumberComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router,private route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA)public editData:any
  ) {
    route.params.subscribe((params) => {
      this.equipmentId = params['id'];

    });

    this.serieNumberForm = this.fb.group({
      serieNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   
  }
  save() {
    this.api.patchEquipment({'serial_number':this.serieNumberForm.value.serieNumber},this.editData.id)
    
      .subscribe(
        (res) => {
          this._snackBar.open("serieNumber updated successfuly",'',{ 
            duration: 3000
        })
         
          this.serieNumberForm.reset()
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
      );
      }
    }