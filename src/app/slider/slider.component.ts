import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { LoaderService } from '../loader/loader.service';
import { carouselAnimation } from '../animations/carousel';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [ PortfolioService ],
  animations: [carouselAnimation]
})
export class SliderComponent implements OnInit {

  public portfolioList = [];
  public portfolioId;
  public error;
  public arrayLength;
 
  constructor(private route: ActivatedRoute, private router: Router, private portfolioService: PortfolioService, public loaderService: LoaderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('_id');
      this.portfolioId = id
    });
    this.portfolioService.getItem(this.portfolioId).subscribe(
      data => this.portfolioList = data,
      error => this.error = error,
    )
    
  }
  currentImage = 0


  nextImage(image:any){
    image += 1;

  this.currentImage = image;
    if(image > this.portfolioList['gallery'].length - 1 ){
      this.currentImage = 0;
    }
    console.log(this.currentImage)
  }

  prevImage(image){
    image -= 1;
    this.currentImage = image;
    if(image < 0){
      this.currentImage = this.portfolioList['gallery'].length - 1;
    }
    console.log(this.currentImage)
  }


  goToGallery(){
    this.router.navigateByUrl(this.router.url+'/gallery')
  }

}
