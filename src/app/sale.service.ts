import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sale } from './sale';
import { SaleItem } from './sale-item';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private httpClient: HttpClient) { }
  sales: Sale[] = [];
  saleItem: any[] = [];

  getSale () {
    return this.httpClient.get(`${environment.api}/sales/index`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getSaleItem (sale) {
    return this.httpClient.get(`${environment.api}/sales/${sale}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  applyCoupon(code) {
    return this.httpClient.post(`${environment.api}/coupons/check`, code);
  }
}
