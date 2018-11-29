import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  Type = 'ALL';
  showNumb = 0;
  showNume = 12;
  num;
  /*get products() {
    return this.dataService.products;
  }*/
  products: Product[];
  Oriproducts: Product[];
  constructor(private dataService: ProductServiceService) {}
  filterPrice() {
    console.log('filter');
  }
  getNum(id) { // 讀取商品數量
    this.num = 0;
    for (const i of this.Oriproducts) {
      if (i.category_id === id) {
        this.num++;
      }

    }
    return this.num;
  }
  filter(id) {
    console.log(id);
    this.products = this.Oriproducts.filter(products => products.category_id.valueOf() === id);
  }
  bigfilter(id) {
  }

  ngOnInit() {
    // console.log('ngOnInit');
    this.dataService.getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
      this.Oriproducts = data;
      console.log(data);
    });
  }
}
