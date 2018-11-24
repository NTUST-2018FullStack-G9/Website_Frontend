import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  price = 0;
  constructor(private dataService: CartServiceService) {
  }

  get carts () {
    return this.dataService.carts;
  }

  ngOnInit() {}
  clickminus(index) {
    if (this.dataService.carts[index].quantity > 0) {
      this.dataService.carts[index].quantity--;
    }
  }

  clickplus(index) {
    this.dataService.carts[index].quantity++;
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }
}
