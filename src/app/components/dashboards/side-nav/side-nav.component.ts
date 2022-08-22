import { Component, OnInit,Input } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {Router} from'@angular/router'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
 userId:any
  @Input() sideNavStatus:boolean=false
  constructor(private router:Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log('afaa')
      this.userId = this.tokenStorage.getUser().id;
      console.log(this.tokenStorage.getUser())
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
