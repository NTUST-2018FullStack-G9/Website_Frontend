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
  saleItem: SaleItem;
  
  getSale () {
    return this.httpClient.get(`${environment.api}/index`);
  }
  getSaleItem (sale) {
    return this.httpClient.get(`${environment.api}/${sale}`);
  }

}
