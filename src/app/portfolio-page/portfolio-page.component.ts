import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { projectsAnimation } from '../animations';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  providers: [ PortfolioService ],
  animations: [ projectsAnimation ]
})
export class PortfolioPageComponent implements OnInit {

  @HostBinding('@pageAnimations')
  public animatePage = true;

  constructor(private router: Router, private route: ActivatedRoute, private portfolioService: PortfolioService ){ }


  public portfolioList = []
  public error = '';
  public selectedId;

  ngOnInit() {
    this.portfolioService.getAllItems().subscribe(
      data => { this.portfolioList = data}, error => { this.error = error.statusText })


    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('_id'));
    //   this.selectedId = id;
    // });
  }
  onSelect(item){
    this.router.navigate(['/portfolio', item._id]);
    this.router.navigate([item._id], {relativeTo: this.route}); 
  }
  // isSelected(item){
  //   return item.id == this.selectedId;
  // }
}


// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-1.jpg?token=AJATCYDVBHZ65DYE7ZK62OTACVAEI
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-2.jpg?token=AJATCYHDABJJBAHRWNL6S2TACVAJ2
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/HomeHero.jpg?token=AJATCYB2EFYZARGBHW754NDACVAL4