import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {

  showNumb ;
  showNume;
  icon_img;
  isIn = false;
  index: number[];
  num;
  constructor(private dataService: ProductService, private cartService: CartService) {}
  filter(id) {
    this.dataService.filter(id);
  }
  bigfilter(id) {
  }
  get indexArray() {
    this.index = [];
    for ( this.num = 0 ; this.num <= this.products.length / 13; this.num++) {
        this.index.push(this.num );
    }
    return this.index;
  }
  get products() {
    return this.dataService.products;
  }
  getImage(Imgname) {
    return  this.dataService.getImage(Imgname);
  }
  addCarts(item: Product) {
    this.isIn = false;
    this.cartService.addToCarts(item).subscribe( data => {
      for (const i of this.cartService.cartsInService) {
        if (i.product_id === item.id) {
          i.quantity++;
          this.isIn = true;
        }
      }
      if (!this.isIn) {
        this.cartService.cartsInService.push({
          id: 0, member_id: 0, product_id: item.id,
          quantity: 1, price: item.saleprice, product_name: item.name,
          created_at: '', updated_at: ''});
          alert('addCarts');
      }
      console.log(item);
      console.log(data);
    }, (response) => {
      console.log(response);
    });
  }
  page( left , right) {
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
  ngOnInit() {
    this.icon_img = 'filter_ico_off.png';
    this.showNumb = 1;
    this.showNume = 12;
  }
}
