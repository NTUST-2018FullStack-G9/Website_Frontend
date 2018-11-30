import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { Product } from './product';
interface ProductsType {

  name: string;
  Image: string;
  Carts: string;
  listprice: number; // 價格
  saleprice: number; // 折扣後的價格
  Discount: boolean; // 是否減價 1;0
  Dp: number; // 折扣百分比
  Type: string;

  // id: number;
  // listprice: number;
  // saleprice: number;
  // isSeling: number;
  // name: string;
  // unit: string;
  // description: string;
  // category_id: number;
  // created_at: string;
  // updated_at: string;
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


export class ProductService {
  constructor(private httpClient: HttpClient) {}
  products: ProductsType[] = [
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'Merlet  William (Pear) Liqueur',
      Image: '../../assets/images/t_item2.jpg',
      Carts: '../../assets/images/cart_img2.jpg',
      listprice: 666, // 價格
      saleprice: 666, // 折扣後的價格
      Discount: false, // 是否減價 1,0
      Dp : 0, // 折扣百分比
      Type: 'Merlet'
    },
    {
      name: 'Lindemans Framboise Lambic 750m',
      Image: '../../assets/images/t_item3.jpg',
      Carts: '../../assets/images/cart_img3.jpg',
      listprice: 81000, // 價格
      saleprice: 810, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 99,
      Type: 'Lambic'
    },
    {
      name: 'ABSOLUT VODKA',
      Image: '../../assets/images/t_item4.jpg',
      Carts: '../../assets/images/cart_img4.jpg',
      listprice: 500, // 價格
      saleprice: 250, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 50, // 折扣百分比
      Type: 'Vodka'
    },
    {
      name: 'French Brandy',
      Image: '../../assets/images/t_item5.jpg',
      Carts: '../../assets/images/cart_img5.jpg',
      listprice: 9999, // 價格
      saleprice: 999, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 90, // 折扣百分比
      Type: 'Brandy'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'Whisky'
    },
    {
      name: 'ABERFELDY12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Carts: '../../assets/images/cart_img1.jpg',
      listprice: 100, // 價格
      saleprice: 90, // 折扣後的價格
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
