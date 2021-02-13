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
  public error;
  public selectedId;

  ngOnInit() {
    this.portfolioService.getAllItems().subscribe(
      data => this.portfolioList = data, 
      error => this.error = error.statusText)
      
  }
  getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  onSelect(item){
    this.router.navigate([item._id], {relativeTo: this.route}); 
  }
  isSelected(item){
    return item._id == this.selectedId;
  }

  
}

