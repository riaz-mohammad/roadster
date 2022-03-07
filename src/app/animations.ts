import { trigger, transition, style, animate, state, query, group, animateChild } from '@angular/animations';



export const card = trigger('card', [
  transition(':enter', [
    style({
      height: '320px',
      opacity: 0,
      transform: ' translateY(200%) {{translate}}',
    }),
      
    animate('1000ms ease', style({
      height: '*',
      opacity: 1,
      transform: 'translateX(0%) translateY(0%)',
    }))
  ], { params: { translate: 'translateX(0%)' } })
]);



export const animateCard = trigger('animateCard', [
  state('false', style({
    opacity: 0,
    transform: '{{translate}}'
  }),
    { params: { translate: 'translateX(0%)' } }
  ),
  
  state('true', style({
    opacity: 1,
    transform: 'translateX(0%)'
  })),

  transition('true <=> false', [
    animate('800ms ease')
  ])
]);



export const input = trigger('input', [
  transition(':enter', [
    group([
      query('app-input', [
      style({
        opacity: 0,
        transform: 'translateY(50%)'
      }),
      animate('500ms 800ms ease'),
    ]),

    query('app-button', [
      style({
        opacity: 0,
        transform: 'translateX(50%)'
      }),
      animate('800ms 1200ms ease'),
    ]),
    ])
  ]),
]);