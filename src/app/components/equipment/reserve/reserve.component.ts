import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms'
import {MatDialogRef} from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { Router,ActivatedRoute  } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service'
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  projectId!: string;
  equipmentForm!:FormGroup;
  actionBtn:string="save"
  managedProjects: any;
  size:any
  constructor(public datepipe: DatePipe,private formBuilder :FormBuilder,
    private router:Router,private route:ActivatedRoute, private tokenStorage: TokenStorageService,  private userService: UserService,
    private dialogRef:MatDialogRef<ReserveComponent>,
    private _snackBar: MatSnackBar) { 
      route.params.subscribe((params) => {
        this.projectId = params['id'];

      });
      let user = this.tokenStorage.getUser();
   
      this.userService.getManagedProjects(user.id).subscribe({
        next:(res)=>{
          this.managedProjects = res;
         this.size=this.managedProjects.length
        },
        error:(err)=>{
          this._snackBar.open("error get managed projects",'',{ 
            duration: 3000
        })
        }
       });
     
    }
  ngOnInit(): void {
    this.equipmentForm=this.formBuilder.group({
      project:[null,Validators.required],
    })
  }
  addEquipmentProject(){
  if(this.equipmentForm.valid){
        this.router.navigate(['/dashboard/projects/equipment/addequipment/'+this.equipmentForm.value.project])
        this.equipmentForm.reset();
        this.dialogRef.close();
  }
  } 

}