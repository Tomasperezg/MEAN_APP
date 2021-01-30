import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  portfolioItems = [
    {"id": 1, "name": "Project 1", "title": "This is the title of priject 1"},
    {"id": 2, "name": "Project 2", "title": "This is the title of priject 2"},
    {"id": 3, "name": "Project 3", "title": "This is the title of priject 3"},
    {"id": 4, "name": "Project 4", "title": "This is the title of priject 4"},
    {"id": 5, "name": "Project 5", "title": "This is the title of priject 5"},
  ]

  constructor(private router: Router, private route: ActivatedRoute ){ }

  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(item){
    // this.router.navigate(['/portfolio', item.id]);
    this.router.navigate([item.id], {relativeTo: this.route}); 
  }
  isSelected(item){
    return item.id == this.selectedId;
  }
}


// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-1.jpg?token=AJATCYDVBHZ65DYE7ZK62OTACVAEI
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/home-3bnr-2.jpg?token=AJATCYHDABJJBAHRWNL6S2TACVAJ2
// https://raw.githubusercontent.com/Tomasperezg/MEAN_APP/main/src/assets/Images/HomeHero.jpg?token=AJATCYB2EFYZARGBHW754NDACVAL4