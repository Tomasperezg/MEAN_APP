import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss']
})
export class PortfolioDetailPageComponent implements OnInit {

  public portfolioId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.portfolioId = id
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.portfolioId = id;
    });
  }
  goPrevius(){
    let previusId = this.portfolioId - 1;
    this.router.navigate(['/portfolio-list', previusId]);
  }
  goNext(){
    let nextId = this.portfolioId + 1;
    this.router.navigate(['/portfolio-list', nextId]);
  }
  gotoPortfolio(){
    let selectedId = this.portfolioId ? this.portfolioId : null;
    // this.router.navigate(['/portfolio', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }
}
