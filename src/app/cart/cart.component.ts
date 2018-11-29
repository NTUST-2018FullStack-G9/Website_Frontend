import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  price = 0;
  constructor(private cartService: CartService) {
  }

  get carts () {
    return this.cartService.carts;
  }

  ngOnInit() {}
  clickminus(index) {
    if (this.cartService.carts[index].quantity > 0) {
      this.cartService.carts[index].quantity--;
    }
  }

  clickplus(index) {
    this.cartService.carts[index].quantity++;
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }
}
