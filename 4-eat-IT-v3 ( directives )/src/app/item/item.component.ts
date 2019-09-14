import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input('value') item;  // props
  @Input() qty=0;
  currentTab = 1 // state
  @Output() buy = new EventEmitter(); // event

  reviews = [
    { author: 'who@mail.com', stars: 5, body: 'sample-review-1' },
    { author: 'who@mail.com', stars: 2, body: 'sample-review-2' }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }
  handleBuy(event) {
    this.buy.emit({ item: this.item })
  }

}
