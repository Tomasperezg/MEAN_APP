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
      error => this.error = error)
      console.log('here: ', this.portfolioId)
  }
  
  // trackById(index: number){
  //   console.log(index)
  // }
  displayImage = 0

  nextImage(image){
    this.displayImage = image + 1
    console.log(this.displayImage)
  }
  prevImage(image){
    this.displayImage = image - 1
    console.log(this.displayImage)
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
