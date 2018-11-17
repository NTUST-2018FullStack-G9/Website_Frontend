import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../product-service.service';
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
  constructor(private dataService: ProductServiceService) {}
  addCart(item: ProductsType, index: number, $event: Event) {
    $event.preventDefault();
    alert('add to cart!');
    for (const i of this.dataService.carts) {

      if (i.Name === item.Name) {
        i.Amount++;
        return 0;
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
