import { Injectable } from '@angular/core';
import { Cart } from './carts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartsInService: Cart[] = [];

  constructor(private httpClient: HttpClient) {}

  getCarts() {
    return this.httpClient.get('http://localhost:8000/api/carts');
  }

  getMemberCart(id) {
    return this.httpClient.get(`${environment.api}/carts/${id}`);
  }

  createOrder(cartsIds) {
    return this.httpClient.post(`${environment.api}/sales`, cartsIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  deleteCarts(cartsIds) {
    return this.httpClient.post(`${environment.api}/carts/delete`, cartsIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  addCarts(cartsIds) {
    return this.httpClient.post(`${environment.api}/carts/add`, cartsIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  subCarts(cartsIds) {
    return this.httpClient.post(`${environment.api}/carts/sub`, cartsIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  addToCarts(cartsIds) {
    return this.httpClient.post(`${environment.api}/carts/addincart`, cartsIds, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
