import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private dataService: ProductService,
    private route: ActivatedRoute
    ) {
  }
  getImage(Imgname) {
    return  this.dataService.getImage(Imgname);
  }
  ngOnInit() {
    this.route.params.subscribe(data => {
      const id = data.slug;
      this.dataService.getProduct(id).subscribe((product: Product) => {
        this.product = product;
        console.log( product);
      });
    });
  }

}
