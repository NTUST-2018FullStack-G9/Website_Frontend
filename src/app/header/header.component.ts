import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { MemberService } from '../member.service';
import { Router } from '../../../node_modules/@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get carts() {
    return this.cartService.carts;
  }

  constructor(private dataService: ProductService,
              private memberService: MemberService,
              private router: Router,
              private cartService: CartService) {}

  price = 0;
  Image_Need;

  get Islogin() {
    return this.memberService.Islogin;
  }
  get name() {
    return this.memberService.members[this.memberService.nowloginmemberindex].ID;
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  deleteCarts(index) {
    for (const i of this.carts) {
      if (i.id === index.id) {
        i.quantity--;
      }
    }
  }

  ngOnInit() {}

  logout() {
    this.memberService.Islogin = false;
    location.reload();
  }

}
