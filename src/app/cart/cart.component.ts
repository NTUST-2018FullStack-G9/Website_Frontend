import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../carts';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { WhosNow } from '../whos-now';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  price = 0;
  memberID = 0;


  constructor(private cartService: CartService,
    private router: Router,
    private memberService: MemberService) {}



  get carts () {
    return this.cartService.cartsInService;
  }

  clickminus(index) {
    if (this.cartService.cartsInService[index].quantity > 1) {    // Strange
      this.cartService.cartsInService[index].quantity--;
      this.sub(this.cartService.cartsInService[index]);
    } else {
      this.delete(this.cartService.cartsInService[index]);
      this.cartService.cartsInService.splice(index, 1);
    }
  }

  clickplus(index) {
    this.cartService.cartsInService[index].quantity++;
    this.add(this.cartService.cartsInService[index]);
  }

  delete(item) {
    this.cartService.deleteCarts(item).subscribe(data => {
      console.log(data);
      // alert('delete success');
    }, (response) => {
      if (response.status === 401) {
        // alert('please login first');
        this.router.navigate(['/login']);
      }
      console.log(response);
    });
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.cartService.cartsInService) {
      this.price += i.quantity * i.price;
    }
    return this.price;
  }

  sub(item) {
    this.cartService.subCarts(item).subscribe(data => {
      console.log(data);
      // alert('sub success');
    }, (response) => {
      if (response.status === 401) {
        // alert('please login first');
        this.router.navigate(['/login']);
      }
      console.log(response);
    });
  }

  add(item) {
    this.cartService.addCarts(item).subscribe(data => {
      console.log(data);
      // alert('add success');
    }, (response) => {
      if (response.status === 401) {
        // alert('please login first');
        this.router.navigate(['/login']);
      }
      console.log(response);
    });
  }

  ngOnInit() {
    this.memberService.whoami().subscribe(
      (data: WhosNow) => {
        this.memberID = data.id;
        this.cartService.getMemberCart(this.memberID).subscribe((cart: Cart[]) => {
          this.cartService.cartsInService = cart;
        });
        console.log(this.memberID);
      },
      response => {
        console.log(response);

      }
    );
  }
}
