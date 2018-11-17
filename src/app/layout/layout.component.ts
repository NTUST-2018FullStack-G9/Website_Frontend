import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
interface ProductsType {
  Name: string;
  Image: string;
  Carts: string;
  Price: number; // 價格
  AfterPrice: number; // 折扣後的價格
  Discount: boolean; // 是否減價 1;0
  Dp: number; // 折扣百分比
  Type: string;
}
declare let $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  upperNum = 0;
  lowerNum = 9;
  upNum = 0;
  loNum = 6;
  get products() {
    return this.dataService.products;
  }
  constructor(public elementRef: ElementRef, private dataService: ProductServiceService) {}
  addCart(item: ProductsType, index: number, $event: Event) {
    $event.preventDefault();
    alert('add to cart!');
    for (const i of this.dataService.carts) {
      if (i.Name === item.Name) {
        i.Amount++;
        return 0;
      }
    }
    this.dataService.carts.push({
      Name: item.Name,
      Price: item.Price, // 價格
      Amount: 1,
      Image: item.Carts,
      Type: item.Type
    });
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
