import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart = {};
  cartLines = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.cart = this.cartService.getCart();
    let keys = Object.keys(this.cart);
    this.cartLines = [];
    keys.forEach(key => {
      this.cartLines.push(this.cart[key])
    })
  }

}
