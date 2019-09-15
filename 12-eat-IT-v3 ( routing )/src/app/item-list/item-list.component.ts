import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


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

}
