import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit {
  tabIndex : Tabs = Tabs.manager;
  role = '';
  showManaged: boolean = true;
  managedProjects: Project[]=[];
  memberProjects:Project[]=[];
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService,
    private api:ProjectService,private _snackBar: MatSnackBar
  ) {

    if (this.tokenStorage.getToken()) {
     
      this.role = this.tokenStorage.getUser().role;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  getAllProjects(){
    this.api.getProjects()
   .subscribe({
    next:(res)=>{
          this.managedProjects=res
    },
    error:(err)=>{
      this._snackBar.open("error get project",'',{ 
        duration: 3000
    })
    }
   })
  }
  setTab(tab : Tabs){
    this.tabIndex = tab; 
  }


  ngOnInit(): void {
    this.setTab(Tabs.manager)

  }


}
enum Tabs{
  manager = 0,
  member = 1,
}


