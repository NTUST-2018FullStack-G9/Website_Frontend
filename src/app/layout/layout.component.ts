import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

declare let $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // for style
  upperNum = 0;
  lowerNum = 9;
  upNum = 0;
  loNum = 6;

  get products() {
    return this.dataService.products;
  }

  get carts() {
    return this.cartService.carts;
  }

  constructor(public elementRef: ElementRef, private dataService: ProductService, private cartService: CartService) {}

  addCart(item: Product, index: number, $event: Event) {
    $event.preventDefault();
    alert('add to cart!');
    for (const i of this.carts) {
      if (i.product_id === item.id) {
        i.quantity++;
        return 0;
      }
    }

    // this.carts.push({
    //   Name: item.Name,
    //   Price: item.Price, // 價格
    //   Amount: 1,
    //   Image: item.Carts,
    //   Type: item.Type
    // });
  }
  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
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

  }
}
