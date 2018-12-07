import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { WhosNow } from '../whos-now';
import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  check;
  price = 0;
  IsDP = false;
  discount = 1.0;
  IsClick = false;

  member = {
    member_id: 0,
    order_name: '',
    order_phone: '',
    order_address: '',
    order_note: '',
    coupon: '',
  };
  couponCode = {
    type: 0,
    code: ''
  };

  get carts() {
    return this.cartService.cartsInService;
  }

  // get Discount() {
  //   return this.discount;
  // }
  // get IsDp() {
  //   return this.IsDP;
  // }

  constructor(private cartService: CartService,
              private router: Router,
              private memberService: MemberService,
              private couponService: CouponService) {}

  // applyCoupon() {
  //   console.log();
  //   this.couponService.applyCoupon(this.couponCode.code).subscribe( data => {
  //     console.log(data);
  //   }, (response) => {
  //     console.log(response);
  //   });

  // }

  applyCoupon() {
    console.log(this.couponCode.code);
    this.IsClick = true;

    if (this.couponCode.code !== '') {
      this.couponService.applyCoupon(this.couponCode).subscribe(
        (data: Coupon) => {
          console.log(data);
          if (data.type === 0) {
            this.IsDP = false;
          } else {
            this.IsDP = true;
            this.member.coupon = this.couponCode.code;
            if (data.type === 1) {
              // 9
              this.discount = 0.9;
            } else if (data.type === 2) {
              // 8
              this.discount = 0.8;
            } else if (data.type === 3) {
              // 7
              this.discount = 0.7;
            }
            for (const i of this.cartService.cartsInService) {
              i.price = Math.round(i.price * this.discount);
            }
          }
        },
        response => {
          console.log(response);
        }
      );
    } else {
      this.IsClick = false;
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
