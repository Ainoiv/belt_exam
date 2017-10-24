import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidComponent } from './bid/bid.component';
import { BidLoginComponent } from './bid/bid-login/bid-login.component';
import { BidDashboardComponent } from './bid/bid-dashboard/bid-dashboard.component';
import { BidResultComponent } from './bid/bid-result/bid-result.component';


const routes: Routes = [
  { path: 'login', component: BidLoginComponent},
  { path: 'dashboard', component: BidDashboardComponent},
  { path: 'add_bid', component: BidDashboardComponent},
  { path: 'result', component: BidResultComponent},
  { path: '**', redirectTo: '/login'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
