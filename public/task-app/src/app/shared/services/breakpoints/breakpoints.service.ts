import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BreakPointsService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  checkBreakPoints(size?: string) {
    const breakpoints = size ? [size] : [ Breakpoints.Small, Breakpoints.HandsetPortrait];

    return this.breakpointObserver
            .observe(breakpoints)
            .pipe(pluck('matches'));
  }

}
