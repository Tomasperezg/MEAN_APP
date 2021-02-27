import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './loader/loader.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  submitted = false;
  errorMsg = '';
  navOpen = true;

  constructor(private _enrollmentService: EnrollmentService, public loaderService: LoaderService ){}

  socTiles = [
    {
      src: '/assets/Images/youtube.png',
      alt: 'Blackbird homes youtube channel link',
      url: 'https://www.youtube.com'
    },
    {
      src: '/assets/Images/pinterest.png',
      alt: 'Blackbird homes Pinterest channel link',
      url: 'https://www.pinterest.com'
    },
    {
      src: '/assets/Images/facebook.png',
      alt: 'Blackbird homes Facebook channel link',
      url: 'https://www.facebook.com'
    },
    {
      src: '/assets/Images/instagram.png',
      alt: 'Blackbird homes Instagram channel link',
      url: 'https://www.instagram.com'
    },
  ];

  userModel = new User('');

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  isNavOpen(){
    this.navOpen = this.navOpen ? false : true;
  }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    )
  }
  // Page auto scroller on load 
  onActivate(event){
    window.scroll(0 , 0)
  }

}
