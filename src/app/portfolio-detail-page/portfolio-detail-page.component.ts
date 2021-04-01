import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { LoaderService } from '../loader/loader.service';
import { accordionAnimation } from '../animations/accordion'

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
  providers: [ PortfolioService ],
  animations: [accordionAnimation]
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
