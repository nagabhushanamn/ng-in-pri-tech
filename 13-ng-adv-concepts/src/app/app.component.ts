import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-adv-concepts';
  primaryTodo = {
    id: 0,
    title: 'live life',
    completed: false
  }
}
