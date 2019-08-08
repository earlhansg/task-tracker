import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { animations } from '@app/home/containers/home/home.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ animations.slideLeftOpacityTrigger ]
})
export class HomeComponent implements OnInit {
  isSmall = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
          this.isSmall = true;
        }
        else {
          this.isSmall = false;
          console.log('not mobile');
        }
    });
  }

}
