import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
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
  isIn = false;
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
  constructor(
    private dataService: ProductService,
    private cartService: CartService
  ) {}
  getNum(id) {
    // 讀取商品數量
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
  }

  addCarts(item: Product) {
    this.isIn = false;
    this.cartService.addToCarts(item).subscribe(
      data => {
        for (const i of this.cartService.cartsInService) {
          if (i.product_id === item.id) {
            i.quantity++;
            this.isIn = true;
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
    this.dataService.filter(id);
  }
  bigfilter(id) {}
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
      $('#slider-range').slider({
        range: true,
        min: 0,
        max: 100000,
        values: [30000, 70000],
        slide: function(event, ui) {
          $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
      });
      $('#amount').val(
        '$' +
          $('#slider-range').slider('values', 0) +
          ' - $' +
          $('#slider-range').slider('values', 1)
      );
    });
    this.icon_img = 'filter_ico.png';
    this.showNumb = 1;
    this.showNume = 12;
  }
}
