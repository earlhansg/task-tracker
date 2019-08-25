import { Component, OnInit, OnDestroy } from '@angular/core';

/* Data */
import { navs, Nav } from '@app/dashboard/containers/dashboard/dashboard.data';
import { Subscription } from 'rxjs';

/* Services */
import { BreakPointsService } from '@app/shared/services/breakpoints/breakpoints.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  navs: Nav[] = navs;
  private breakpointsSubcription$: Subscription;
  isSmallScreen: boolean;

  constructor( private breakPointsService: BreakPointsService ) { }

  ngOnInit() {
    this.breakpointsSubcription$ = this.breakPointsService
        .checkBreakPoints(`(max-width: 901px)`)
        .subscribe((match: boolean) => this.isSmallScreen = match);
  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

}
