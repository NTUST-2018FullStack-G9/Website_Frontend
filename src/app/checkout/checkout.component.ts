import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  get carts() {
    return this.cartService.carts;
  }
  constructor(private dataService: ProductService, private cartService: CartService) {
  }
  price = 0;
  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }
  ngOnInit() {
  }

}
