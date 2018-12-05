import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ProductService {
  products: Product[] = [];
  Oriproducts: Product[] = [];
  constructor(private httpClient: HttpClient) {
    this.getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
      this.Oriproducts = data;
      console.log(this.Oriproducts);
    });
  }
// ===========================
filter(id) {
  this.products = this.Oriproducts.filter(products => products.category_id.valueOf() === id);
}
bigfilter(id) {
  switch (id) {
    case 1: // Beer
      this.products = this.Oriproducts.filter(products => products.category_id.valueOf() < 4);
    break;
    case 2: // Spirit
      this.products = this.Oriproducts.filter(products => (products.category_id.valueOf() > 3 && products.category_id.valueOf() < 10));
    break;
    case 3: // Wine
      this.products = this.Oriproducts.filter(products => (products.category_id.valueOf() > 9 && products.category_id.valueOf() < 15));
    break;
    default:
      this.products = this.Oriproducts.filter(products => (products.category_id.valueOf() > 14));
    break;
  }

}

getProducts() {
  return this.httpClient
    .get(`${environment.api}/products`);
}
getProduct(id) {
  return this.httpClient
  .get(`${environment.api}/products/${id}`);
}
getImage(Imgname) {
  return'http://localhost:8000/storage/' + Imgname;
}
reload() {
  this.getProducts()
  .subscribe((data: Product[]) => {
    this.products = data;
    this.Oriproducts = data;
    console.log(this.Oriproducts);
  });
}
// =============================
}
