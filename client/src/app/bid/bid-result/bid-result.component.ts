import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { User } from './../bid-login/user';

@Component({
  selector: 'app-bid-result',
  templateUrl: './bid-result.component.html',
  styleUrls: ['./bid-result.component.css']
})
export class BidResultComponent implements OnInit {
  users: Array<User>;

  constructor(private router: Router, private user_service: UserService) { }

  ngOnInit() {
    this.user_service.get_all()
      // .then(users => {console.log(users);this.users = users})
      .then(users => this.users = users)
      .catch(err => console.log('Get user ERROR', err));

  }

}
