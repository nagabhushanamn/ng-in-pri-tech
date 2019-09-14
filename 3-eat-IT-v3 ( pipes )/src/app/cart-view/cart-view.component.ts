import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  @Input('value') cart; // {}
  cartLines = [];

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    let keys = Object.keys(this.cart);
    this.cartLines = [];
    keys.forEach(key => {
      this.cartLines.push(this.cart[key])
    })
  }

}
