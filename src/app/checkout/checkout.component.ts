import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  constructor(private dataService: ProductServiceService) {
  }
  price = 0;
  getCartprice() {

  }
  ngOnInit() {
  }

}
