import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private mycarts: ProductServiceService) {}
  clickcount = 0;
  ngOnInit() {}

  clickminus() {
    if (this.clickcount > 0) {
      this.clickcount--;
    }
  }
  clickplus() {
    this.clickcount++;
  }
  get carts() {
    return this.mycarts.carts;
  }
}
