import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = {}
  cartQty = 0;
 
  constructor() { }

  getCartQty() {
    return this.cartQty;
  }

  getCart() {
    return this.cart;
  }

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
    console.log(this.cart);
  }

}
