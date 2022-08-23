import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-manager-list',
  templateUrl: './project-manager-list.component.html',
  styleUrls: ['./project-manager-list.component.css']
})
export class ProjectManagerListComponent implements OnInit {
  sideNavStatus: boolean = false;
  role = '';
  showManaged: boolean = true;
  managedProjects: any;
  size:any
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService,
    private _snackBar:MatSnackBar

  ) {}

  ngOnInit(): void {
    
    let user = this.tokenStorage.getUser();






    this.userService.getManagedProjects(user.id).subscribe({
      next:(res)=>{
        this.managedProjects = res;
        
      },
      error:(err)=>{
        this._snackBar.open("error get managed projects",'',{ 
          duration: 3000
      })
      }
     });
   
  }
 count(list:[any]):number{
 return list.length
 }

}
