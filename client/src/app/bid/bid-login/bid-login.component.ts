import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { User } from './user';

@Component({
  selector: 'app-bid-login',
  templateUrl: './bid-login.component.html',
  styleUrls: ['./bid-login.component.css']
})
export class BidLoginComponent implements OnInit {
  new_user: User;

  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User;  
  }

  login() {
    this.user_service.create(this.new_user)
    // console.log("Successfully created user", this.new_user)
    .then(() => this.router.navigate(['dashboard']))
    .catch(err => console.log('User login Error', err));
  }

}
