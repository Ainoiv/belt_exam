import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './bid/bid-login/user';
import { Bid } from './bid/bid-dashboard/bid';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(new_user: User) {
    console.log('add user service', new_user)
    return this.http.post('/login', new_user).map(data => data.json).toPromise();
  }

  get_all() {
    return this.http.get('/get_all_users').map(data => data.json()).toPromise();
  }

  am_i_logged_in() {
    return this.http.get('/am_i_logged_in').map(data => data.json()).toPromise();
  }

  add_bid(new_bid: Bid) {
    return this.http.post('/add_bid', new_bid).map(data => data.json()).toPromise();
  }

  get_all_bids() {
    return this.http.get('/get_all_bids').map(data => data.json()).toPromise();
  }
  get_one_user() {
    return this.http.get('/get_one_user').map(data => data.json()).toPromise();
  }


}
