import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService){}

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

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText
    )
  }


}
