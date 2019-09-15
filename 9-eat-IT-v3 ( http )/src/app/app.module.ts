import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    PriceDiscountPipe,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
