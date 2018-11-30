import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ProductService {
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

// =============================
}
