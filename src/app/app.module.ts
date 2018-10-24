import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    AboutComponent,
    HeaderComponent,
    ErrorComponent,
    Category1Component,
    Category2Component,
    ContactComponent,
    ProductDetailComponent,
    SingleBlogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
