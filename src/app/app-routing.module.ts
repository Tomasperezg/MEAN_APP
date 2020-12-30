import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailPageComponent } from './portfolio-detail-page/portfolio-detail-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'about-us', component: AboutPageComponent},
  { path: 'contact-us', component: ContactPageComponent},
  { path: 'portfolio-list', component: PortfolioPageComponent},
  { path: 'portfolio-list/:id', component: PortfolioDetailPageComponent},
  { path: "**", component: PageNotFoundComponent} //<- This should always be the last route and should alway be at the end of the routes list
                                                  //Otherwise, will match with any link and display the 'Page Not Found' 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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