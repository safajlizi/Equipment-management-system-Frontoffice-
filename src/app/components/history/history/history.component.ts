import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: any;
  id:any
  constructor(private historyService: HistoryService,private route: ActivatedRoute,private router:Router) {
    route.params.subscribe((params) => {
      this.id = params['id'];
    });
    }

  ngOnInit(): void {
    this.historyService
      .getHistory()
      .subscribe((response) => {
        console.log(response)
        this.history = response;

      });
  }
  
}
