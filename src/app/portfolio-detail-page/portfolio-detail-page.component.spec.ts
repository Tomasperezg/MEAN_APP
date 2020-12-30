import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailPageComponent } from './portfolio-detail-page.component';

describe('PortfolioDetailPageComponent', () => {
  let component: PortfolioDetailPageComponent;
  let fixture: ComponentFixture<PortfolioDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
