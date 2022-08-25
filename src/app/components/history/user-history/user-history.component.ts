import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute , Router} from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  history: any;
  id:any
  constructor(     private _snackBar:MatSnackBar
,    private tokenStorage: TokenStorageService,private historyService: HistoryService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    }
  getUserHistory()
  {
    this.historyService.getHistoryByUser(this.id)
   .subscribe({
    next:(res)=>{
        this.history=res 
    
   },
    error:(err)=>{
      this._snackBar.open("error get hisotry")
    }
   })
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.id = this.tokenStorage.getUser().id;
    } else {
      this.router.navigateByUrl('/login');
    }
    
  
      this.getUserHistory()
  }
  
}
