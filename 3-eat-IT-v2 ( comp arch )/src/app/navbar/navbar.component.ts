import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-light bg-info">
      <a class="navbar-brand" href="/">{{title}}</a>
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  @Input() title = 'Unknown';

  constructor() { }

  ngOnInit() {
  }

}
