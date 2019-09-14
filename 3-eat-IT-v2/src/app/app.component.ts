import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // state
  cart = []
  items = [
    {
      id: 1,
      name: 'Veg',
      price: 110,
      canBuy: true,
      imgPath: 'images/veg.png',
      description: 'veg is yummy & always healthy'
    },
    {
      id: 2,
      name: 'Non-Veg',
      price: 120,
      canBuy: true,
      imgPath: 'images/non-veg.png',
      description: 'non-veg is yummy & not always healthy'
    }
  ]

  addToCart(event) {
    let { item } = event;
    this.cart.push(item)
    console.log("adding to cart..");
  }

}
