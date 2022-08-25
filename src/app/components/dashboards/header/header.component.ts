import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role!: string;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.role = this.tokenStorage.getUser().role;
    } else {
      this.router.navigateByUrl('/login');
    }
    
  }
  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  ingresar() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/');
  }
}
