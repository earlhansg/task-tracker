import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { animations } from '@app/home/containers/home/home.animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ animations.slideLeftOpacityTrigger ]
})
export class HomeComponent implements OnInit, OnDestroy {
  leftHeader: string;
  private breakpointsSubcription$: Subscription;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
          this.leftHeader = 'hide'
        }
        else this.leftHeader = 'show';
    });
  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
  }

}
