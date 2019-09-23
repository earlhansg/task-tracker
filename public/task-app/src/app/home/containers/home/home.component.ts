import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { animations } from '@app/home/containers/home/home.animations';
import { Subscription } from 'rxjs';

/* Services */
import { BreakPointsService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ animations.slideLeftOpacityTrigger ]
})
export class HomeComponent implements OnInit, OnDestroy {
  leftHeader: string;
  private breakpointsSubcription$: Subscription;

  constructor( private breakPointsService: BreakPointsService ) {}

  ngOnInit() {
    this.breakpointsSubcription$ = this.breakPointsService
        .checkBreakPoints()
        .subscribe((match: boolean) => {
          if (match) {
            this.leftHeader = 'hide';
          } else this.leftHeader = 'show';
        });
  }

  ngOnDestroy() {
    this.breakpointsSubcription$.unsubscribe();
  }

}
