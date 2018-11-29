import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
import { MemberService } from '../member.service';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get carts() {
    return 0;
  }
  get isLogin() {
    return this.memberService.isLogin();
  }
  constructor(
    private dataService: ProductServiceService,
    private memberService: MemberService,
    private router: Router
  ) {}
  price = 0;
  /*get Islogin() {
    return this.memberService.Islogin;
  }
  get name() {
    return this.memberService.members[this.memberService.nowloginmemberindex]
      .ID;
  }*/
  getCartprice() {

    return this.price;
  }
  deleteCarts(index) {

  }
  ngOnInit() {}
 /* logout() {
    this.memberService.Islogin = false;
    location.reload();
  }*/
}
