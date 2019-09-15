import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = {}
  cartQty = 0;

  cartStream = new Subject()

  constructor() { }

  getCartQty() {
    return this.cartQty;
  }
  getCartStream() {
    return this.cartStream;
  }
  getCart() {
    return this.cart;
  }

  addToCart(event, qty = 1) {
    let { item } = event;
    let { id } = item;
    let cartLine = this.cart[id] // cartLine={item,qty}
    if (cartLine) {
      cartLine = { ...cartLine, qty: cartLine.qty + qty }
    } else {
      cartLine = { item, qty: 1 }
    }
    if (cartLine.qty === 0) {
      delete this.cart[id]
    } else {
      this.cart = { ...this.cart, [id]: cartLine }
    }
    this.cartQty = Object.keys(this.cart).length
    this.cartStream.next({ cart: this.cart, cartQty: this.cartQty })

  }

}
