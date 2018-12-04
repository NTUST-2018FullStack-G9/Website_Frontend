import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';
import { Router } from '@angular/router';
import { SaleItem } from '../sale-item';



@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent implements OnInit {

  memberID = 0;

  constructor(private saleServie: SaleService,
              private router: Router) { }

  get sales () {
    return this.saleServie.sales;
  }

  get saleItems() {
    return this.saleServie.saleItem;
  }

  ngOnInit() {
    this.saleServie.getSale().subscribe((data: Sale[]) => {
      console.log(data);
      this.saleServie.sales = data;
      this.memberID = data[0].memberid;
      //
      this.saleServie.getSaleItem(this.memberID).subscribe((item: SaleItem[]) => {
        console.log(this.memberID);
        console.log(item);
        this.saleServie.saleItem = item;
      });
    }, (response) => {
      if (response === 401) {
        this.router.navigate(['/login']);
      }
    });

  }



}
