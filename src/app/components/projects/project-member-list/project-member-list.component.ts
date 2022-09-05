import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-member-list',
  templateUrl: './project-member-list.component.html',
  styleUrls: ['./project-member-list.component.css']
})
export class ProjectMemberListComponent implements OnInit {
  sideNavStatus: boolean = false;
  role = '';
  showManaged: boolean = true;
  memberProjects: any;
  size=0
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService,
    private _snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    
    let user = this.tokenStorage.getUser();
  
    this.userService.getMemberProjects(user.id).subscribe({
      next:(res)=>{
        this.memberProjects = res;
        if(this.memberProjects.length != 0){this.size=this.memberProjects.length}

      },
      error:(err)=>{
        this._snackBar.open("error get member projects",'',{ 
          duration: 3000
      })
      }
     });
  }

}

