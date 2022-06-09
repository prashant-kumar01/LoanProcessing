import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanEligibilityComponent } from './loan-eligibility/loan-eligibility.component';
const routes: Routes = [
  
  {path:"LoanEligibility",component:LoanEligibilityComponent},
  {path:"",component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanEligibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
