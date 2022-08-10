import { Component, OnInit, Attribute } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component implements OnInit {
  tabIndex: Tabs = Tabs.Equipment;
  role = '';
  constructor(private tokenStorage: TokenStorageService) {}
  ngOnInit() {
    this.setTab(Tabs.Users);
    this.role = this.tokenStorage.getUser().role;
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }
}

enum Tabs {
  Equipment = 0,
  Users = 1,
  Projects,
}
