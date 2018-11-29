import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
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
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  Type = 'ALL';
  showNumb = 0;
  showNume = 15;
  get products() {
    return this.dataService.original;
  }
  constructor(private dataService: ProductService, private cartService: CartService) {}
  addCart(item: Product, $event: Event) {
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
  ngOnInit() {}
}
