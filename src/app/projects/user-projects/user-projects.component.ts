import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent implements OnInit {
  sideNavStatus: boolean = false;
  role = '';
  tabIndex: Tabs = Tabs.Managed;
  showManaged: boolean = true;
  managedProjects: any;
  memberProjects: any;
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setTab(Tabs.Managed);
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getUser().role;
    } else {
      this.router.navigateByUrl('/login');
      return;
    }
    let user = this.tokenStorage.getUser();
    this.userService.getManagedProjects(user.id).subscribe((res) => {
      this.managedProjects = res;
    });
    this.userService.getMemberProjects(user.id).subscribe((res) => {
      this.memberProjects = res;
    });
  }
  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }
}

enum Tabs {
  Managed = 0,
  Member = 1,
}
