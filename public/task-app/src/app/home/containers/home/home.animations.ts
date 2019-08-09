import { animate, state, style, transition, trigger } from '@angular/animations';


export const animations = {
  slideLeftOpacityTrigger: trigger('slideLeft', [
    state('show', style({
      'opacity': 1
    })),
    state('hide', style({
      'opacity': 0,
      'marginLeft': '-410px'
    })),
    transition('* => show', animate('1000ms ease-in-out')),
    transition('* => hide', animate('500ms ease-in-out'))
  ])
};
