import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
declare let $: any;
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  Type = 'ALL';
  showNumb = 0;
  showNume = 12;
  num;
  local = 'http://localhost:8000/storage/';
  imageToShow: any;
  products: Product[] = [];
  Oriproducts: Product[] = [];
  constructor(private dataService: ProductService) {}
  getNum(id) { // 讀取商品數量
    this.num = 0;
    for (const i of this.Oriproducts) {
      if (i.category_id === id) {
        this.num++;
      }

    }
    return this.num;
  }
  filter(id) {
    console.log(id);
    this.products = this.Oriproducts.filter(products => products.category_id.valueOf() === id);
  }
  bigfilter(id) {
  }

  getImage(Imgname) {
    return this.local + Imgname;
  }
  // createImageFromBlob(image: Blob) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //      this.imageToShow = reader.result;
  //   }, false);
  //   if (image) {
  //      reader.readAsDataURL(image);
  //   }
  // }
  // getImageFromService(name) {
  //   // this.isImageLoading = true;
  //   this.dataService.getImage(name).subscribe((data: any) => {
  //     this.createImageFromBlob(data);
  //     // this.isImageLoading = false;
  //   }, error => {
  //     // this.isImageLoading = false;
  //     // console.log(error);
  //   });
  //   // return this.imageToShow;
  // }

  ngOnInit() {
    $(function() {
      $( '#slider-range' ).slider({
        range: true,
        min: 150,
        max: 1500,
        values: [ 520, 1100 ],
        slide: function( event, ui ) {
        $( '#amount' ).val( '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
        }
      });
      $( '#amount' ).val( '$' + $( '#slider-range' ).slider( 'values', 0 ) +
        ' - $' + $( '#slider-range' ).slider( 'values', 1 ) );
      });
    this.dataService.getProducts()
    .subscribe((data: Product[]) => {
      this.products = data;
      this.Oriproducts = data;
      console.log(data);
    });
  }
}
