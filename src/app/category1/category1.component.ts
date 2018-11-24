import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartServiceService } from '../cart-service.service';
// interface ProductsType {
//   Name: string;
//   Image: string;
//   Carts: string;
//   Price: number; // 價格
//   AfterPrice: number; // 折扣後的價格
//   Discount: boolean; // 是否減價 1;0
//   Dp: number; // 折扣百分比
//   Type: string;
// }

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  Type = 'ALL';
  showNumb = 0;
  showNume = 12;
  /*get products() {
    return this.dataService.products;
  }*/
  products: Product[];
  constructor(private dataService: ProductServiceService, private cartService: CartServiceService) {}
  /*getNum(id) {
    return this.dataService.getNum(id);
  }*/
  filterPrice() {
    console.log('filter');
  }
  log() {
    console.log('1512');
  }
  search(keyword) {
    this.Type = keyword;
    this.dataService.search(keyword);
  }
  addCart(item: Product, index: number, $event: Event) {
    $event.preventDefault();
    alert('add to cart!');
    for (const i of this.cartService.carts) {
      if (i.product_id === item.id) {
        i.quantity++;
        return 0;
      }
    }
    // this.cartService.carts.push({
    //   id: item.id,
    //   price: item.Price, // 價格
    //   quantity: 1,
    //   // Image: item.Carts,
    //   Type: item.Type
    // });

  }

  ngOnInit() {
    // console.log('ngOnInit');
    this.dataService.getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
    });
  }
}
