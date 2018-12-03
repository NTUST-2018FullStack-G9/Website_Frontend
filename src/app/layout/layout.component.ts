import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Ad } from '../ad';
import { AdService } from '../ad.service';

declare let $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // for style
  upperNum = 0;
  lowerNum = 8;
  upNum = 0;
  loNum = 6;
  isIn = false;
  local = 'http://localhost:8000/storage/';
  products: Product[] = [];
  ads: Ad[] = [];
  // get products() {
  //   return this.dataService.products;
  // }
  getImage(Imgname) {
    return  this.dataService.getImage(Imgname);
  }
  getAd0Image(Imgname) {
    console.log(this.local + this.ads[0].imagename);
    return this.local + this.ads[0].imagename;
  }
  getAd1Image(Imgname) {
    return this.local + this.ads[1].imagename;
  }
  getAd2Image(Imgname) {
    return this.local + this.ads[2].imagename;
  }
  get carts() {
    return this.cartService.cartsInService;
  }
  // get ads() {
  //   return this.adService.ads;
  // }
  constructor(
    public elementRef: ElementRef,
    private dataService: ProductService,
    private cartService: CartService,
    private adService: AdService
  ) {}

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
            updated_at: ''
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

  ngOnInit() {
    // console.log('ngOnInit');
    this.dataService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
    });
    this.adService.getAds().subscribe((data: Ad[]) => {
      this.ads = data;
      console.log(data);
    });
    setTimeout(() => {
    // <script src="assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
    const sliderTop = document.createElement('script');
    sliderTop.type = 'text/javascript';
    sliderTop.src = 'assets/js/rs-plugin/rs.home.js';
    this.elementRef.nativeElement.appendChild(sliderTop);

    // <script src="assets/js/bootstrap.min.js"></script>
    const tItem = document.createElement('script');
    tItem.type = 'text/javascript';
    tItem.src = 'assets/js/main.js';
    this.elementRef.nativeElement.appendChild(tItem);

    // ttobslider
    $('.slider8').bxSlider({
      mode: 'vertical',
      slideWidth: 300,
      minSlides: 3,
      slideMargin: 10
    });
    $('.slider9').bxSlider({
      mode: 'vertical',
      slideWidth: 300,
      minSlides: 3,
      slideMargin: 10
    });
    $('.slider10').bxSlider({
      mode: 'vertical',
      slideWidth: 300,
      minSlides: 3,
      slideMargin: 10
    });
  }, 500);
}
}
// tslint:disable-next-line:use-life-cycle-interface
// ngAfterViewInit(): void {
//   // <script src="assets/js/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
//   const sliderTop = document.createElement('script');
//   sliderTop.type = 'text/javascript';
//   sliderTop.src = 'assets/js/rs-plugin/rs.home.js';
//   this.elementRef.nativeElement.appendChild(sliderTop);

//   // <script src="assets/js/bootstrap.min.js"></script>
//   const tItem = document.createElement('script');
//   tItem.type = 'text/javascript';
//   tItem.src = 'assets/js/main.js';
//   this.elementRef.nativeElement.appendChild(tItem);

//   // ttobslider
//   $('.slider8').bxSlider({
//     mode: 'vertical',
//     slideWidth: 300,
//     minSlides: 3,
//     slideMargin: 10
//   });
//   $('.slider9').bxSlider({
//     mode: 'vertical',
//     slideWidth: 300,
//     minSlides: 3,
//     slideMargin: 10
//   });
//   $('.slider10').bxSlider({
//     mode: 'vertical',
//     slideWidth: 300,
//     minSlides: 3,
//     slideMargin: 10
//   });

//
