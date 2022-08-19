import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

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
  memberProjects: any;
  size:any
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    
    let user = this.tokenStorage.getUser();
    this.userService.getManagedProjects(user.id).subscribe((res) => {
      this.managedProjects = res;
      console.log(res)
      console.log(this.managedProjects)
    });
    this.userService.getMemberProjects(user.id).subscribe((res) => {
      this.memberProjects = res;
    });
  }
 count(list:[any]):number{
 return list.length
 }

}
