import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';
import { SaleItem } from '../sale-item';
import { Sale } from '../sale';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent implements OnInit {
  saleID = 0;
  IsClick = true;
  totalPrice = 0;

  constructor(public saleServie: SaleService, private router: Router) {}

  get sales() {
    console.log(this.saleServie.sales);
    return this.saleServie.sales;
  }

  get saleItems() {
    return this.saleServie.saleItem;
  }

  click() {
    this.IsClick = !this.IsClick;
    return this.IsClick;
  }

  ngOnInit() {
    this.saleServie.getSale().subscribe(
      (data: Sale[]) => {
        // console.log(data);
        this.saleServie.sales = data;
        for (let i = 0; i < data.length; i++) {
          this.saleID = data[i].id;
          //
          this.saleServie.getSaleItem(this.saleID).subscribe((item: SaleItem[]) => {
            this.saleServie.saleItem[i] = item;
            console.log('salteItemmmmmmmmmmm', this.saleServie.saleItem[i]);
          });
        }
      },
      response => {
        if (response === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
