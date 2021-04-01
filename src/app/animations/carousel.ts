import {
    trigger, animateChild, group,
    transition, animate, style, query, stagger, state
  } from '@angular/animations';

  // carousel animation
export const carouselAnimation = 
trigger('carouselSlide', [
  transition(':enter', [
    style({opacity: 0.4}),
    animate('350ms ease-in', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('350ms ease-in', style({}))
  ])
])