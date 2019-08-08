import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';


// export const animations = {
//   slideLeftOpacityTrigger: trigger('slideLeft', [
//     state('void', style({
//       'opacity': 0,
//       'marginLeft': '-210px'
//     })),
//     transition('* <=> void', animate('1000ms ease-in-out'))
//   ])
// };


export const animations = {
  slideLeftOpacityTrigger:  trigger('slideLeft', [
    transition("void => fly", [
      animate(300, keyframes([
        style({'backgroundColor': 'red'})
      ]))
      ]
    )
  ]),
};