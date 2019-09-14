import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // state
  cart = {}
  cartQty = 0;
  isCartOpen = false
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
    let { id } = item;
    let cartLine = this.cart[id] // cartLine={item,qty}
    if (cartLine) {
      cartLine = { ...cartLine, qty: cartLine.qty + 1 }
    } else {
      cartLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: cartLine }
    this.cartQty = Object.keys(this.cart).length
  }

  toggleCart(event) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
