import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarCollapsed = true;

  model = {
    left: true,
    middle: false,
    right: false
  };
}
