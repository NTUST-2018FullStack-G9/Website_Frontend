import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MemberService } from '../member.service';
import { Router } from '../../../node_modules/@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../carts';
import { WhosNow } from '../whos-now';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  price = 0;
  memberID = 0;
  userName = '';
  Image_Need;
  keyword;

  get isLogin() {
    return this.memberService.isLogin();
  }
  get name() {
    return 0;
  }
  get carts() {
    return this.cartService.cartsInService;
  }

  onEnter() {
    this.router.navigate(['/category2']);
    this.search();
  }

  search() {
    this.dataService.products = this.dataService.Oriproducts.filter(products => products.name.valueOf().search(this.keyword) !== -1);
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
  reload() {
    this.dataService.reload();
  }
  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.cartsInService) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  deleteCarts(index) {
    for (const i of this.cartService.cartsInService) {
      if (i.id === index.id) {
        // i.quantity = 0;
        console.log(i);
        this.delete(i);
        this.cartService.cartsInService.splice(index, 1);
      }
    }
    this.ngOnInit();
  }
  delete(item) {
    this.cartService.deleteCarts(item).subscribe(
      data => {
        console.log(data);
        // alert('delete success');
      },
      response => {
        if (response.status === 401) {
          // alert('please login first');
          this.router.navigate(['/login']);
        }
        console.log(response);
      }
    );
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.memberService.whoami().subscribe(
      (data: WhosNow) => {
        // this.whoisnow = data;
        this.memberID = data.id;
        this.userName = data.name;
        const id = this.memberID;
        this.cartService.getMemberCart(id).subscribe((cart: Cart[]) => {
          this.cartService.cartsInService = cart;
          console.log(id);
          console.log(this.cartService.cartsInService);
        });
      });

    // 改動後儲存，網頁css跑掉，必須重新整理
  }
}
