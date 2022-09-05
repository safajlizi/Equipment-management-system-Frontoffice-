import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideNavStatus: boolean = false
  role!: string;
  history = false
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    if (this.router.url.includes('/history')) {
      this.history = true
    }
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getUser().role;
    } else {
      this.router.navigateByUrl('/login');
    }

  }


}
