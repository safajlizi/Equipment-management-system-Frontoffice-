import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute , Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: any;
  id:any
  constructor(    private _snackBar:MatSnackBar
,    private historyService: HistoryService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    }
getEHistoryByEquipment(){
    this.historyService.getHistoryByEquipment(this.id)
      .subscribe({
        next:(res)=>{
          this.history = res; 
        console.log(res)
        },
        error:(err)=>{
          this._snackBar.open("error get equipment hisotry ")
        }
       });
}
  ngOnInit(): void {
    this.historyService.getHistory()
      .subscribe({
        next:(res)=>{
          this.history = res; 
        },
        error:(err)=>{
          this._snackBar.open("error get equipment hisotry ")
        }
       });
    
  }
  
}
