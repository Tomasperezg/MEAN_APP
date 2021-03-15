import {
    trigger, animateChild, group,
    transition, animate, style, query, stagger, state
  } from '@angular/animations';

  export const accordionAnimation = 
  trigger('extendAccordion', [
      transition(':enter', [
          style({opacity: 0, transform: 'translateY(-20%)'}),
          animate('400ms ease-in', style({opacity: 1, transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('400ms ease-in', style({opacity: 0, transform: 'translateY(-20%)'}))
      ])
  ])