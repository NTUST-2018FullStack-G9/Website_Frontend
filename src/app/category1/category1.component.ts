import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.css']
})
export class Category1Component implements OnInit {
  Type = 'ALL';
  showNumb;
  showNume;
  icon_img;
  i: number;
  j: number;
  sType;
  buf: Product;
  isIn = false;
  index: number[];
  get topPrice() {
    return Number($('#slider-range').slider('values', 1));
  }
  get downPrice() {
    return Number($('#slider-range').slider('values', 0));
  }
  num;
  imageToShow: any;
  get products() {
    return this.dataService.products;
  }
  get indexArray() {
    this.index = [];
    for ( this.num = 0 ; this.num <= this.products.length / 13; this.num++) {
        this.index.push(this.num );
    }
    return this.index;
  }
  constructor(private dataService: ProductService, private cartService: CartService, private router: Router) {}
  getNum(id) { // 讀取商品數量
    this.num = 0;
    for (const i of this.dataService.Oriproducts) {
      if (i.category_id === id) {
        this.num++;
      }
    }
    return this.num;
  }
  all() {
    this.dataService.products = this.dataService.Oriproducts;
    location.reload();
  }
  desc() {
    this.sType = 'Top to Low';
    // this.dataService.products =  this.dataService.Oriproducts;
    for ( this.i = 0 ; this.i < this.dataService.products.length ; this.i ++ ) {
      for ( this.j = 0 ; this.j < this.dataService.products.length ; this.j ++ ) {
          if (this.dataService.products[this.i].saleprice > this.dataService.products[this.j].saleprice ) {
            this.buf = this.dataService.products[this.i];
            this.dataService.products[this.i] = this.dataService.products[this.j];
            this.dataService.products[this.j] = this.buf;
          }
      }
    }
  }
  asc() {
    this.sType = 'Low to Top';
    // this.dataService.products =  this.dataService.Oriproducts;
    for ( this.i = 0 ; this.i < this.dataService.products.length ; this.i ++ ) {
      for ( this.j = 0 ; this.j < this.dataService.products.length ; this.j ++ ) {
          if (this.dataService.products[this.i].saleprice < this.dataService.products[this.j].saleprice ) {
            this.buf = this.dataService.products[this.i];
            this.dataService.products[this.i] = this.dataService.products[this.j];
            this.dataService.products[this.j] = this.buf;
          }
      }
    }
  }
  addCarts(item: Product) {
    this.isIn = false;
    this.cartService.addToCarts(item).subscribe(
      data => {
        for (const i of this.cartService.cartsInService) {
          if (i.product_id === item.id) {
            i.quantity++;
            this.isIn = true;
            this.router.navigate(['/post', item.id]);
            alert('Add In Product-Detail is more Convenient');
            break;
          }
        }
        if (!this.isIn) {
          this.cartService.cartsInService.push({
            id: 0,
            member_id: 0,
            product_id: item.id,
            quantity: 1,
            price: item.saleprice,
            product_name: item.name,
            created_at: '',
            updated_at: '',
            product_imagename: item.imagename,
          });
          alert('addCarts');
        }
        console.log(item);
        console.log(data);
      },
      response => {
        console.log(response);
      }
    );
  }
  filter(id) {
    this.showNumb = 1;
    this.showNume = 12;
    this.dataService.filter(id);
  }
  bigfilter(id) {
    this.showNumb = 1;
    this.showNume = 12;
    this.dataService.bigfilter(id);
  }
  // bigfilter(id) {}
  priceFilter() {
    this.dataService.products = this.dataService.Oriproducts.filter(
      products =>
        products.saleprice >= this.downPrice &&
        products.saleprice <= this.topPrice
    );
  }
  getImage(Imgname) {
    return this.dataService.getImage(Imgname);
  }
  page(left, right) {
    this.showNumb = left;
    this.showNume = right;
  }
  Previous() {
    if (this.showNumb > 12) {
      this.showNumb -= 12;
      this.showNume -= 12;
    }
  }
  Next() {
    if ((this.showNumb + 12 ) <= this.products.length) {
      this.showNumb += 12;
      this.showNume += 12;
    }
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
    // setTimeout(() => {
    //   $(function() {
    //     $( '#slider-range' ).slider({
    //       range: true,
    //       min: 150,
    //       max: 1500,
    //       values: [ 520, 1100 ],
    //       slide: function( event, ui ) {
    //       $( '#amount' ).val( '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
    //       }
    //     });
    //     $( '#amount' ).val( '$' + $( '#slider-range' ).slider( 'values', 0 ) +
    //       ' - $' + $( '#slider-range' ).slider( 'values', 1 ) );
    //     });


    // }, 500);
    this.sType = 'default';
    // this.dataService.products = this.dataService.Oriproducts;
    this.icon_img = 'filter_ico.png';
    this.showNumb = 1;
    this.showNume = 12;
  }
}
