import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  list=[
    {
      number:'1',
      name:'Profile',
      icon:'fa-solid fa-user'
    },
    {
      number:'2',
      name:'Dashboard',
      icon:'fa-solid fa-house'
    },
    {
      number:'3',
      name:'history',
      icon:'fa-solid fa-clock-rotate-left'
    }
  ]
  @Input() sideNavStatus:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
