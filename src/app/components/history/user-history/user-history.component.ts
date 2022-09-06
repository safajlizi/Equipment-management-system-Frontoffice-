import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute , Router} from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  history: any;
  id:any
  size:any
  historySearchForm!: FormGroup;
  historydateForm!: FormGroup;

  shownUsers: any;
  selectedUsers: string[] = [];
  message: string = '';
  cardStyle: string = '';

  constructor(   private formBuilder: FormBuilder,
    private _snackBar:MatSnackBar
,    private tokenStorage: TokenStorageService,private historyService: HistoryService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.tokenStorage.getToken()) {
      this.id = this.tokenStorage.getUser().id;
    } else {
      this.router.navigateByUrl('/login');
    }

    }
  getUserHistory()
  {
    this.historyService.getHistoryByUser(this.id)
   .subscribe({
    next:(res)=>{
        this.history=res 
        this.size=this.history.length
   },
    error:(err)=>{
      this._snackBar.open("error get hisotry")
    }
   })
  }
  
  ngOnInit(): void {
    this.historySearchForm = this.formBuilder.group({
      keyword: [''],
    });
    this.historydateForm = this.formBuilder.group({
      date: [''],
    });

    if (this.tokenStorage.getToken()) {
      this.id = this.tokenStorage.getUser().id;
    } else {
      this.router.navigateByUrl('/login');
    }
    
  
      this.getUserHistory()
  }
  onChange(event: Event) {
    if (!this.historySearchForm.controls['keyword'].value) {
      this.history = [];
    } else {
     /* this.historyService
        .filter(this.userSearchForm.controls['keyword'].value)
        .subscribe((response) => {
          this.shownUsers = response;
        });*/
    }
  }

  onChangeDate(event: Event) {
    if (!this.historydateForm.controls['date'].value) {
      this.history = [];
    } else {
      this.historyService.filterByDate({
        "concerning": "user",
        "id": this.id,
        "date": this.historydateForm.value.date
      })
        .subscribe({next:(res)=>
          {
          this.history = res}
          ,
          error:(err)=>{
            this._snackBar.open("error get hisotry with take action", '', {
              duration: 3000,
            });
          }
        });
    }
  }
  takeHistory() {
   
      this.historyService.filterByAction({
        "concerning": "user",
        "id": this.id,
        "action_type":"take"
      })
        .subscribe({
          next:(res)=>{
            this.history = res}
          ,
          error:(err)=>{
            this._snackBar.open("error get hisotry with take action", '', {
              duration: 3000,
            });
          }
        });
   
  }
  returnHistory() {
    this.historyService.filterByAction({
        "concerning": "user",
        "id": this.id,
        "action_type":"return"
      })
        .subscribe({
    next:(res)=>{
          this.history = res;},
          error:(err)=>{
            this._snackBar.open("error get hisotry with return action", '', {
              duration: 3000,
            });
          }
        });
  }
  faultHistory() {
      this.historyService.filterByAction({
        "concerning": "user",
        "id": this.id,
        "action_type": "fault"
      })
        .subscribe({
          next:(res)=>{
            this.history = res;},
          error:(err)=>{
            this._snackBar.open("error get hisotry with fault action ", '', {
              duration: 3000,
            });
          }
        });
    }
  
}