import { Component, Input } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCartOpen = false
  items = []

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.loadItems()
  }

  toggleCart(event) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
