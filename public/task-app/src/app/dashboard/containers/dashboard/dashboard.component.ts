import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

/* Data */
import { navs, Nav } from '@app/dashboard/containers/dashboard/dashboard.data';
import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navs: Nav[] = navs;
  private breakpointsSubcription$: Subscription;
  isSmallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe([`(max-width: 901px)`])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => this.isSmallScreen = m);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
  
}
