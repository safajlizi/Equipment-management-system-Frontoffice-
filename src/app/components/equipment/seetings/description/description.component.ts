import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import {MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog'
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute , Router} from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  descriptionForm!: FormGroup;
  equipmentId: any;
  message = '';
  constructor(
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService,
    private dialogRef:MatDialogRef<DescriptionComponent>
    ,private _snackBar: MatSnackBar,
    private router:Router,private route:ActivatedRoute,
    private api: EquipmentService,
    @Inject(MAT_DIALOG_DATA)public editData:any
  ) {
    route.params.subscribe((params) => {
      this.equipmentId = params['id'];

    });

    this.descriptionForm = this.fb.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  save() {
    this.api.patchEquipment({description:this.descriptionForm.value.description},this.editData.id)
    
    .subscribe(
      (res) => {
        this._snackBar.open("serieNumber updated successfuly",'',{ 
          duration: 3000
      })
       
        this.descriptionForm.reset()
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