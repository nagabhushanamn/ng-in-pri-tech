import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  loadItems() {
    return [
      {
        id: 1,
        name: 'Veg',
        price: 110,
        currencyCode: 'INR',
        canBuy: true,
        imgPath: 'images/veg.png',
        timestamp: Date.now(),
        description: 'veg is yummy & always healthy'
      },
      {
        id: 2,
        name: 'Non-Veg',
        price: 120,
        canBuy: true,
        imgPath: 'images/non-veg.png',
        timestamp: Date.now(),
        discount: 100.00,
        description: 'non-veg is yummy & not always healthy'
      }
    ]
  }
  loadReviews(itemId) {
    return [
      { stars: 5, body: 'sample review1', author: 'who@mail.com' }
    ]
  }
 
}
