import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Product } from './product';
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
// interface CartsType {
//   Name: string;
//   Price: number; // 價格
//   Amount: number;
//   Image: string;
//   Type: string;
// }

@Injectable({
  providedIn: 'root'
})


export class ProductServiceService {
  constructor(private httpClient: HttpClient) {}
  products: ProductsType[] = [
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'Merlet  William (Pear) Liqueur',
      Image: '../../assets/images/t_item2.jpg',
      Carts: '../../assets/images/cart_img2.jpg',
      Price: 666, // 價格
      AfterPrice: 666, // 折扣後的價格
      Discount: false, // 是否減價 1,0
      Dp : 0, // 折扣百分比
      Type: 'Merlet'
    },
    {
      Name: 'Lindemans Framboise Lambic 750m',
      Image: '../../assets/images/t_item3.jpg',
      Carts: '../../assets/images/cart_img3.jpg',
      Price: 81000, // 價格
      AfterPrice: 810, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 99,
      Type: 'Lambic'
    },
    {
      Name: 'ABSOLUT VODKA',
      Image: '../../assets/images/t_item4.jpg',
      Carts: '../../assets/images/cart_img4.jpg',
      Price: 500, // 價格
      AfterPrice: 250, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 50, // 折扣百分比
      Type: 'Vodka'
    },
    {
      Name: 'French Brandy',
      Image: '../../assets/images/t_item5.jpg',
      Carts: '../../assets/images/cart_img5.jpg',
      Price: 9999, // 價格
      AfterPrice: 999, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 90, // 折扣百分比
      Type: 'Brandy'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      Name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    }
  ];
  original = this.products;
  wineType = [
    'Ale',
    'Lager',
    'Lambic',
    'Brandy',
    'Whisky',
    'Rum',
    'Mezcal',
    'Gin',
    'Vodka',
    'Sauvignon Blanc',
    'Riesling',
    'Cabernet Sauvignon',
    'Merlet',
    'Pinot Noir'
  ];
  num = 0;
  getNum(id) { // 讀取商品數量
    this.num = 0;
    for (const i of this.original) {
      if ( i.Type === this.wineType[id] ) {
          this.num ++;
      }
    }
    return this.num;
  }

  search(keyword) { // 搜尋
    if ( keyword.trim() === '' ) {
        this.products = this.original;
    } else {
        this.products = this.original.filter(products => products.Type.indexOf(keyword) !== -1);
    }
  }
// ===========================
getProducts() {
  return this.httpClient
    .get('http://localhost:8000/api/products');
}
getProduct(id) {
  return this.httpClient
    .get(`${environment.api}/${id}`);
}




// =============================

}
