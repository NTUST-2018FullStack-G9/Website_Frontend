import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
interface ProductsType {
  Name: string;
  Image: string;
  Carts: string;
  Price: number; // 價格
  AfterPrice: number; // 折扣後的價格
  Discount: boolean; // 是否減價 1;0
  Dp: number; // 折扣百分比
  Type: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  upperNum = 0;
  lowerNum = 9;
  upNum = 0;
  loNum = 6;
  get products() {
    return this.dataService.products;
  }
  constructor(private dataService: ProductServiceService) {
  }
  addCart(item: ProductsType, index: number) {
    alert('add to cart');
    for (const i of this.dataService.carts) {
        if (i.Name === item.Name) {
          this.dataService.carts[index].Amount ++;
        }
    }

    this.dataService.carts.push({
        Name: item.Name,
        Price: item.Price, // 價格
        Amount: 1,
        Image: item.Carts,
        Type: item.Type
  });


  }
  ngOnInit() {}
}
