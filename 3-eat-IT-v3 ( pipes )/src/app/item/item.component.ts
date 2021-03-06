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

  reviews = []


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
