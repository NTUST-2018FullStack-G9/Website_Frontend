import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { Category2Component } from './category2/category2.component';
import { Category1Component } from './category1/category1.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'category1',
    component: Category1Component,
  },
  {
    path: 'category2',
    component: Category2Component,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'productDetail',
    component: ProductDetailComponent,
  },
  {
    path: 'singleBlog',
    component: SingleBlogComponent,
  },
  {
    path: 'cart/:slug',
    component: CartComponent,
  },
  {
    path: 'forgetpw',
    component: ForgetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
