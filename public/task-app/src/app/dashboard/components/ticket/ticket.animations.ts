import { animate, state, style, transition, trigger } from '@angular/animations';


export const animations = {
  slideDownOpacityTrigger: trigger('slideDown', [
    state('void', style({
      'opacity': 0,
      'transform': 'translateY(-5%)'
    })),
    transition('* <=> void', animate('1000ms ease-in-out'))
  ])
};
