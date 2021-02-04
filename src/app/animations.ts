import {
    trigger, animateChild, group,
    transition, animate, style, query, stagger
  } from '@angular/animations';
  
  // Routable animations
export const slideInAnimation =
trigger('routeAnimation', [
  transition('homepage <=> portfolio', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
       opacity: 0
      })
    ]),
    query(':enter', [
      style({ opacity: 0 })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

// project list animation
export const projectsAnimation =
trigger('pageAnimations', [
    transition(':enter', [
      query('.projects, ul', [
        style({opacity: 0, transform: 'translateY(-40px)'}),
        stagger(-30, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ])
  ]);
