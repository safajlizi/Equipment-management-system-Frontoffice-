import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  tabIndex: Tabs = Tabs.Equipment;
  role = "admin"
  ngOnInit() {
    this.setTab(Tabs.Users);
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }

}

enum Tabs {
  Equipment = 0,
  Users = 1,
  Projects
}
