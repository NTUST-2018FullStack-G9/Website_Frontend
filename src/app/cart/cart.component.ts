import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  price = 0;
  constructor(private cartService: CartService) {}

  carts: Cart[];
  // get carts () {
  //   return this.cartService.carts;
  // }

  ngOnInit() {
    // console.log('ngOnInit');
    this.cartService.getCarts().subscribe((data: Cart[]) => {
      this.carts = data;
      console.log(data);
    });
  }
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
