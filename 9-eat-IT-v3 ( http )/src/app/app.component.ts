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
  error = ''

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.loadItems()
      .subscribe((response: any) => {
        this.items = response
      }, error => {
        this.error = error.message;
      })

  }

  toggleCart(event) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
