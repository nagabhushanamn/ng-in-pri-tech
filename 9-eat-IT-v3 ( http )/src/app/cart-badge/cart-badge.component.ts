import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  value = 0
  constructor(private cartService: CartService) { }

  ngOnInit() {
    let stream = this.cartService.getCartStream()
    stream.subscribe((event: any) => {
      let { cartQty } = event
      this.value = cartQty
    })
  }


}
