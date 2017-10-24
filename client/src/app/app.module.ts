import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { BidComponent } from './bid/bid.component';
import { BidLoginComponent } from './bid/bid-login/bid-login.component';
import { BidDashboardComponent } from './bid/bid-dashboard/bid-dashboard.component';
import { BidResultComponent } from './bid/bid-result/bid-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BidComponent,
    BidLoginComponent,
    BidDashboardComponent,
    BidResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
