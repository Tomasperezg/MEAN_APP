import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service'

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  providers: [ PortfolioService ]
})
export class PortfolioPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private portfolioService: PortfolioService ){ }


  public portfolioList = []

  ngOnInit() {
    this.portfolioService.getAllItems().subscribe(
      data => {
        this.portfolioList = data
      })
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('id'));
    //   this.selectedId = id;
    // });
  }
  // onSelect(item){
  //   // this.router.navigate(['/portfolio', item.id]);
  //   this.router.navigate([item.id], {relativeTo: this.route}); 
  // }
  // isSelected(item){
  //   return item.id == this.selectedId;
  // }
}


// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-1.jpg?token=AJATCYDVBHZ65DYE7ZK62OTACVAEI
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-2.jpg?token=AJATCYHDABJJBAHRWNL6S2TACVAJ2
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/HomeHero.jpg?token=AJATCYB2EFYZARGBHW754NDACVAL4