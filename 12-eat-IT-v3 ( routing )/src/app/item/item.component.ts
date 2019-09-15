import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('value') item;  // props
  @Input() itemQty = 0;
  currentTab = 1 // state
  @Output() buy = new EventEmitter(); // event

  reviews = []

  constructor(
    private itemService: ItemService,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    let cartLine = this.cartService.getCart()[this.item.id] || {};
    this.itemQty = cartLine.qty || 0;
  }

  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.itemService.loadReviews(this.item.id)
        .subscribe((response: any) => {
          this.reviews = response
        })
    }
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  handleBuy(event) {
    this.cartService.addToCart({ item: this.item })
  }

  handleNewReview(review) {
    this.itemService.submitNewReview(this.item.id, review)
      .subscribe(review => {
        this.reviews = this.reviews.concat(review);
      })
  }

}
