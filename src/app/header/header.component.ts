import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MemberService } from '../member.service';
import { Router } from '../../../node_modules/@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../carts';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  price = 0;
  TEST_Member = 3;
  Image_Need;
  carts: Cart[] = [];
  get isLogin() {
    return this.memberService.isLogin();
  }
  get name() {
    return 0;
  }

  constructor(
    private dataService: ProductService,
    private memberService: MemberService,
    private router: Router,
    private cartService: CartService,
  ) {}

  get Islogin() {
    return this.memberService.isLogin();
  }
  logout() {
    console.log('logout');
    this.memberService.logout();
    this.router.navigate(['/login']);
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  deleteCarts(index) {
    for (const i of this.carts) {
      if (i.id === index.id) {
        i.quantity = 0;
        this.carts.splice(index, 1);
      }
    }
    this.checkout();
  }

  checkout() {
    this.cartService.createOrder([2, 4]).subscribe(data => {
      console.log(data);
      alert('checkout success');
    }, (response) => {
      if (response.status === 401) {
        alert('please login first');
        this.router.navigate(['/login']);
      }
      console.log(response);
    });
  }

  ngOnInit() {
    const id = this.TEST_Member;
    this.cartService.getMemberCart(id).subscribe((cart: Cart[]) => {
      this.carts = cart;
    });
    // 改動後儲存，網頁css跑掉，必須重新整理
  }
}
