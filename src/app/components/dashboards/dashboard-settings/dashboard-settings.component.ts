import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-settings',
  templateUrl: './dashboard-settings.component.html',
  styleUrls: ['./dashboard-settings.component.css']
})
export class DashboardSettingsComponent implements OnInit {
  tabIndex: Tabs = Tabs.Visibility;
  ngOnInit() {
    this.setTab(Tabs.Visibility);
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }

}

enum Tabs {
  Visibility = 0,
}
