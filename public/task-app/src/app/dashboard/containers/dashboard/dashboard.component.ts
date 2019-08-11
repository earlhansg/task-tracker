import { Component, OnInit } from '@angular/core';

/* Data */
import { navs, Nav } from '@app/dashboard/containers/dashboard/dashboard.data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navs: Nav[] = navs;
  
  constructor() { }

  ngOnInit() {}
}
