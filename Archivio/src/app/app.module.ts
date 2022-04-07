import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPages } from './pages/cart.page';
import { ProductCardPage } from './pages/product-card.page';
import { ProductListPage } from './pages/product-list.page';
import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: ProductListPage,
  },
  {
    path: 'product-card',
    component: ProductCardPage,
  },
  { path: 'cart', component: CartPages },
];


@NgModule({
  declarations: [
    AppComponent,
    CartPages,
    ProductListPage,
    ProductCardPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
