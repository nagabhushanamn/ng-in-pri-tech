import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  loadItems() {
    let apiURL = "http://localhost:8181/api/items";
    return this.httpClient.get(apiURL)
  }
  loadReviews(itemId) {
    let apiURL = `http://localhost:8181/api/items/${itemId}/reviews`;
    return this.httpClient.get(apiURL)
  }

}
