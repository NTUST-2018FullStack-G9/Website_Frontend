import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { WhosNow } from '../whos-now';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  check;
  price = 0;
  IsCoupon = false;
  IsClick = false;

  member = {
    member_id: 0,
    order_name: '',
    order_phone: '',
    order_address: '',
    order_note: ''
  };
  couponCode = {
    type: 0,
    code: ''
  };

  get carts() {
    return this.cartService.cartsInService;
  }

  get IsDP() {
    return this.IsCoupon;
  }

  constructor(private cartService: CartService, private router: Router, private memberService: MemberService, private couponService: CouponService) {}

  // applyCoupon() {
  //   console.log();
  //   this.couponService.applyCoupon(this.couponCode.code).subscribe( data => {
  //     console.log(data);
  //   }, (response) => {
  //     console.log(response);
  //   });

  // }

  applyCoupon() {
    this.couponService.applyCoupon(this.couponCode.code).subscribe(
      data => {
        console.log(data);
      },
      response => {
        console.log(response);
      }
    );

    this.IsClick = true;
    if (this.IsDP) {
      alert('Dont try to get Dp again you stupid');
    } else {
      if (this.couponCode.code === '6666' || this.couponCode.code === '5487') {
        alert('20% off');
        this.IsCoupon = true;
        for (const i of this.carts) {
          i.price = i.price * 0.8;
        }
      } else if (this.couponCode.code === '') {
        this.IsClick = false;
      } else {
        this.IsCoupon = false;
      }
    }
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.cartsInService) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  checkout() {
    // alert('checkOut');
    this.cartService.createOrder(this.member).subscribe(
      data => {
        console.log(data);
        alert('checkout success');
        this.router.navigate(['/']);
        location.reload();
      },
      response => {
        if (response.status === 401) {
          // alert('please login first');
          this.router.navigate(['/login']);
        }
        console.log(response);
      }
    );
  }

  ngOnInit() {
    this.check = false;
    this.memberService.whoami().subscribe((data: WhosNow) => {
      this.member.member_id = data.id;
      console.log('checkOut');
      console.log(this.member.member_id);
    });
  }
}
