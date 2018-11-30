import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  products: Product[];
  Oriproducts: Product[];
  showNumb = 0;
  showNume = 12;
  constructor(private dataService: ProductService) {}
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
