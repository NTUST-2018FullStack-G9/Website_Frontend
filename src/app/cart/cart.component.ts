import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../carts';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  price = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) {}

  // member = {
  //   member_id: 21,
  //   order_name : '$member->order_name',
  //   order_phone : '$member->order_phone',
  //   order_address : '$member->order_address',
  //   order_note : '56564564',
  // };

  carts: Cart[] = [];
  // get carts () {
  //   return this.cartService.carts;
  // }

  clickminus(index) {
    if (this.carts[index].quantity > 1) {    // Strange
      this.carts[index].quantity--;
    } else {
      this.carts.splice(index, 1);
    }
    this.checkout();
  }

  clickplus(index) {
    this.carts[index].quantity++;
    this.checkout();
  }

  getCartprice() {
    this.price = 0;
    for (const i of this.carts) {
      this.price += i.quantity * i.price;
    }
    return this.price;
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
    this.route.params.subscribe(data => {
      const id = data.slug;
      this.cartService.getMemberCart(id).subscribe((cart: Cart[]) => {
        this.carts = cart;
      });
    });
  }
}
