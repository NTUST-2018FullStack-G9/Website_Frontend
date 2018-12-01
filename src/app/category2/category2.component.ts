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
  constructor(private dataService: ProductService) {}
  filter(id) {
    this.dataService.filter(id);
  }
  bigfilter(id) {
  }
  get products() {
    return this.dataService.products;
  }
  getImage(Imgname) {
    return  this.dataService.getImage(Imgname);
  }
  page( left , right) {
    this.showNumb = left;
    this.showNume = right;
  }
  Previous() {
    if (this.showNumb !== 1) {
      this.showNumb -= 12;
      this.showNume -= 12;
    }
  }
  Next() {
    if (this.showNumb !== 49) {
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
