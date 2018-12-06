import { SaleService } from './../sale.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { WhosNow } from '../whos-now';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  check;
  couponCode;
  member = {
    member_id : 0,
    order_name : '',
    order_phone : '',
    order_address : '',
    order_note : '',
  };

  get carts() {
    return this.cartService.cartsInService;
  }
  constructor( private cartService: CartService,
     private router: Router,
     private memberService: MemberService,
     private saleService: SaleService
     ) {
  }

  price = 0;
  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.cartsInService) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  checkout() {
    // alert('checkOut');
    this.cartService.createOrder(this.member).subscribe(data => {
      console.log(data);
      alert('checkout success');
      this.router.navigate(['/']);
      location.reload();
    }, (response) => {
      if (response.status === 401) {
        // alert('please login first');
        this.router.navigate(['/login']);
      }
      console.log(response);
    });

  }
  applyCoupon(code) {
    this.saleService.applyCoupon(code).subscribe(


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
