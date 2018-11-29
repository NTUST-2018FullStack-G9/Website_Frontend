import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  price = 0;
  ngOnInit() {}
  /* get carts () {
    return this.dataService.carts;
  }
  constructor(private dataService: ProductServiceService) {
  }

  clickminus(index) {

    if (this.dataService.carts[index].Amount > 0) {
      this.dataService.carts[index].Amount--;
    }
  }
  clickplus(index) {
    this.dataService.carts[index].Amount++;
  }*/

  getCartprice() {

  }
}
