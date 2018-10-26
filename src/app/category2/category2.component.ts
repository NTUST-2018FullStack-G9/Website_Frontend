import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  Type = 'Wiskey';
  showNumb = 0;
  showNume = 15;
  get products() {
    return this.dataService.products;
  }
  constructor(private dataService: ProductServiceService) {
  }
  ngOnInit() {
  }

}
