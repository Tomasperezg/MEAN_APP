import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public images:Array<Object> = [
    {
      src: 'assets/Images/home-3bnr-1.jpg', 
      alt: 'Image 1', 
      txt: 'Inspiration',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      linktxt: 'See portfolio',
      linkurl: '/portfolio-list'
    },
    {
      src: 'assets/Images/home-3bnr-2.jpg', 
      alt: 'Image 2', 
      txt: 'Our History',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      linktxt: 'Learn more about us',
      linkurl: '/about-us'
    },
    {
      src: 'assets/Images/HomeHero.jpg', 
      alt: 'Image 3', 
      txt: 'Coming Soon',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      linktxt: 'See our next project',
      linkurl: '/new-project'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
