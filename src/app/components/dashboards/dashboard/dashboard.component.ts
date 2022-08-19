import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sideNavStatus:boolean=false
  role!: string;
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log('afaa')
      this.role = this.tokenStorage.getUser().role;
      console.log(this.tokenStorage.getUser())
    } else {
      this.router.navigateByUrl('/login');
    }
    
  }


}