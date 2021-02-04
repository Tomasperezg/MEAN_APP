import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PortfolioDetailPageComponent } from './portfolio-detail-page/portfolio-detail-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { animation: 'homepage'}},
  { path: 'home', component: HomePageComponent, data: { animation: 'homepage'}},
  { path: 'about-us', component: AboutPageComponent, data: { animation: 'about'}},
  { path: 'contact-us', component: ContactPageComponent, data: { animation: 'page'}},
  { path: 'portfolio-list', component: PortfolioPageComponent, data: { animation: 'portfolio'}},
  { path: 'portfolio-list/:_id', component: PortfolioDetailPageComponent},
  { path: "**", component: PageNotFoundComponent} //<- This should always be the last route and should alway be at the end of the routes list
                                                  //Otherwise, will match with any link and display the 'Page Not Found' 
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Declare all new compnent here
export const routingComponents = [
  HomePageComponent, 
  AboutPageComponent, 
  ContactPageComponent, 
  PortfolioPageComponent,
  PortfolioDetailPageComponent, 
  PageNotFoundComponent]