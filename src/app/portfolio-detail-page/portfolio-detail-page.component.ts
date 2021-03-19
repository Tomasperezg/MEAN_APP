import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { carouselAnimation } from '../animations';
import { LoaderService } from '../loader/loader.service';
import { accordionAnimation } from '../animations/accordion'

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
  providers: [ PortfolioService ],
  animations: [carouselAnimation, accordionAnimation]
})

export class PortfolioDetailPageComponent implements OnInit {

  public portfolioList = []
  public portfolioId;
  public error;
  accordionOpen = false;


  constructor(private route: ActivatedRoute, private router: Router, private portfolioService: PortfolioService, public loaderService: LoaderService) {}


  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('_id');
      this.portfolioId = id;
    });
    this.portfolioService.getItem(this.portfolioId).subscribe(
      data => this.portfolioList = data,
      error => this.error = error);

    }
 
  trackByImg(index: number, img: any){
    return img ? img : null
  }


  currentImage = 0



  nextImage(image:any, l:any){
      image += 1;

    this.currentImage = image;
      if(image > l - 1){
        this.currentImage = 0;
      }
      console.log(this.currentImage)
  }



  prevImage(image ,l){
    image -= 1;
    this.currentImage = image;
    if(image < 0){
      this.currentImage = l - 1;
    }
  }
  
  openAccordion(){
    this.accordionOpen = this.accordionOpen? false : true;
  }
  
  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  gotoPortfolio(){
    let selectedId = this.portfolioId ? this.portfolioId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }
}
