import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  ads: Ad[] = [];
  constructor(private httpClient: HttpClient) {
    this.getAds()
    .subscribe((data: Ad[]) => {
      this.ads = data;
    });
   }
  getAds() {
    return this.httpClient.get('http://localhost:8000/api/ads');
  }
}
