import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HighLightDirective } from './high-light.directive';
import { ReviewFormComponent } from './review-form/review-form.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VegBoxComponent } from './veg-box/veg-box.component';
import { NonVegBoxComponent } from './non-veg-box/non-veg-box.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'items',
    component: ItemListComponent,
    children: [
      {
        path: '',
        component: VegBoxComponent
      },
      {
        path: 'non-veg',
        component: NonVegBoxComponent
      }
    ]
  },
  { path: 'cart', component: CartViewComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    PriceDiscountPipe,
    HighLightDirective,
    ReviewFormComponent,
    HomeComponent,
    ItemListComponent,
    NotFoundComponent,
    VegBoxComponent,
    NonVegBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
