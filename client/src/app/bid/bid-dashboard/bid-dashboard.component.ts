import { Component, OnInit } from '@angular/core';
import { User } from './../bid-login/user';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Bid } from './bid';


@Component({
  selector: 'app-bid-dashboard',
  templateUrl: './bid-dashboard.component.html',
  styleUrls: ['./bid-dashboard.component.css']
})
export class BidDashboardComponent implements OnInit {
  users: Array<User>;
  new_bid: Bid;
  bids: Array<Bid>;

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_bid = new Bid;

    this.user_service.am_i_logged_in()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));


    this.user_service.get_all()
      // .then(users => {console.log(users);this.users = users})
      .then(users => this.users = users)
      .catch(err => console.log('Get all users ERROR', err));

    this.user_service.get_all_bids()
      .then(bids => this.bids = bids)
      .catch(err => console.log('Get all bids ERROR', err));
  }

  bid(){
    console.log('Add new bid worked')
    this.user_service.add_bid(this.new_bid)
      .then(() => this.router.navigate(['dashboard']))
      .catch(err => console.log('Add bid ERROR', err));
  }

}
