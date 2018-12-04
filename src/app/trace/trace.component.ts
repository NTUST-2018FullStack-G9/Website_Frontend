import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';


@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent implements OnInit {

  constructor(private saleServie: SaleService) { }

  ngOnInit() {
    this.saleServie.getSale().subscribe((data: Sale[]) => {
      console.log(data);
      this.saleServie.sales = data;

      this.saleServie.getSaleItem(data).subscribe({

      });
    });
    
  }



}
