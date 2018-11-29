import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
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
interface CartsType {
  Name: string;
  Price: number; // 價格
  Amount: number;
  Image: string;
  Type: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProductServiceService {
  constructor(private httpClient: HttpClient) {}
// ===========================
getProducts() {
  return this.httpClient
    .get(`${environment.api}/products`);
}
getProduct(id) {
  return this.httpClient
  .get(`${environment.api}/products/${id}`);
}
getImage(name): Observable<Blob> {
  return this.httpClient
  .get(`${environment.api}/image/51.jpeg`, {responseType: 'blob'});
}






// =============================

}
