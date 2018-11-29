import { Injectable } from '@angular/core';
import { Carts } from './carts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  carts: Carts[] = [  // 購物車
  ];

  constructor(private httpClient: HttpClient) { }

  getCarts() {
    return this.httpClient
      .get('http://localhost:8000/api/carts');
  }

  getCart(id) {
    return this.httpClient
      .get(`${environment.api}/carts/${id}`);
  }

}
