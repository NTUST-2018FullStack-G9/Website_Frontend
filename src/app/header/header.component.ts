import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get carts() {
    return this.dataService.carts;
  }
  constructor(private dataService: ProductServiceService) {}
  price = 0;
  getCartprice() {
    this.price = 0;
    for (const i of this.carts) {
      this.price += i.Amount * i.Price;
    }
    return this.price;
  }
  deleteCarts(index) {
    this.carts.splice(index, 1);
  }
  ngOnInit() {}
}
