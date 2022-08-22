import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute , Router} from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  history: any;
  id:any
  constructor( private tokenStorage: TokenStorageService,private historyService: HistoryService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log('afaa')
      this.id = this.tokenStorage.getUser().id;
    } else {
      this.router.navigateByUrl('/login');
    }
    
    this.historyService
      .getHistory()
      .subscribe((response) => {
        console.log(response)
        this.history = response;
        console.log(this.history)
        
      });
  }
  
}
