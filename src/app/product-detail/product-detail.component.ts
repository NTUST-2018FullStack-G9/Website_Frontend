import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  isIn;
  quantity = 1;
  constructor(private dataService: ProductService, private route: ActivatedRoute, private cartService: CartService) {}
  getImage(Imgname) {
    return this.dataService.getImage(Imgname);
  }

  addNumCarts(item: Product) {
    console.log(this.quantity);
    item.quantity = this.quantity;
    this.cartService.addNumInCarts(item).subscribe(
      data => {
        console.log(data);
        alert('add to cart');
        for (const i of this.cartService.cartsInService) {
          if (i.product_id === item.id) {
            i.quantity += this.quantity;
            this.isIn = true;
            break;
          }
        }
        if (!this.isIn) {
          this.cartService.cartsInService.push({
            id: 0,
            member_id: 0,
            product_id: item.id,
            quantity: this.quantity,
            price: item.saleprice,
            product_name: item.name,
            created_at: '',
            updated_at: '',
            product_imagename: item.imagename
          });
        }
      },
      response => {
        console.log(response);
      }
    );
  }

  // addCarts(item: Product) {
  //   console.log(this.quantity);
  //   this.isIn = false;
  //   for (const i of this.cartService.cartsInService) {
  //     if (i.product_id === item.id) {
  //       alert(this.quantity);
  //       for (let j = 0; j < this.quantity; j++) {
  //         setTimeout(() => {
  //           console.log('j', j);
  //           this.cartService.addCarts(i).subscribe(
  //             data => {
  //               setTimeout(() => {
  //                 console.log(data);
  //               }, 500);
  //             },
  //             response => {
  //               console.log(response);
  //             }
  //           );
  //         }, 500);
  //       }
  //       i.quantity += this.quantity;
  //       this.isIn = true;
  //       alert('add');
  //       break;
  //     }
  //   }
  //   if (!this.isIn) {
  //     this.cartService.addToCarts(item).subscribe(
  //       data => {
  //         if (!this.isIn) {
  //           this.cartService.cartsInService.push({
  //             id: 0,
  //             member_id: 0,
  //             product_id: item.id,
  //             quantity: this.quantity,
  //             price: item.saleprice,
  //             product_name: item.name,
  //             created_at: '',
  //             updated_at: '',
  //             product_imagename: item.imagename
  //           });
  //         }
  //         console.log(item);
  //         console.log(data);
  //         alert('addCarts');
  //       },
  //       response => {
  //         console.log(response);
  //       }
  //     );
  //   }
  // }

  ngOnInit() {
    this.quantity = 1;
    this.route.params.subscribe(data => {
      const id = data.slug;
      this.dataService.getProduct(id).subscribe((product: Product) => {
        this.product = product;
        console.log(product);
      });
    });
  }
}
