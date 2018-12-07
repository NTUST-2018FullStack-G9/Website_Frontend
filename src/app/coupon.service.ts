import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }

  applyCoupon(code) {
    return this.httpClient.post(`${environment.api}/coupons/check`, code, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

}
