import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../portfolio.service';
import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [ PortfolioService ]
})
export class GalleryComponent implements OnInit {

  public portfolioList = []
  public portfolioId;
  public error;

  constructor(private route: ActivatedRoute, private router: Router,private portfolioService: PortfolioService, public loaderService: LoaderService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('_id');
      this.portfolioId = id;
    });
    this.portfolioService.getItem(this.portfolioId).subscribe(
      data => this.portfolioList = data,
      error => this.error = error);


  }

}
