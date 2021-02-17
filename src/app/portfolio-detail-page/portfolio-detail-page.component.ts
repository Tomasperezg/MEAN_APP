import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss']
})

export class PortfolioDetailPageComponent implements OnInit {

  public portfolioList = []
  public portfolioId;
  public error;
  constructor(private route: ActivatedRoute, private router: Router, private portfolioService: PortfolioService) { }

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
  

  nextImage(image, l){
    image += 1;
    this.currentImage = image;
    if(image > l - 1){
      this.currentImage = 0;
    }
    console.log(this.currentImage)
    console.log()
  }
  prevImage(image ,l){
    image -= 1;
    this.currentImage = image;
    if(image < 0){
      this.currentImage = l - 1;
    }
  }
  
  // goPrevius(){
  //   let previusId = this.portfolioId - 1;
  //   this.router.navigate(['/portfolio-list', previusId]);
  // }
  // goNext(){
  //   let nextId = this.portfolioId + 1;
  //   this.router.navigate(['/portfolio-list', nextId]);
  // }
  gotoPortfolio(){
    let selectedId = this.portfolioId ? this.portfolioId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }
}
