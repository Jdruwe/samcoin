import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navbarCollapsed = true;

  myStyle: object = {};
  myParams: object = {};

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
          density: {enable: true, value_area: 800}
        },
        color: {
          value: '#007bff'
        },
        shape: {
          type: 'circle',
          stroke: {width: 0, color: '#000000'},
          polygon: {nb_sides: 3}
        },
        size: {
          value: 4,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#007bff',
          opacity: 0.4,
          width: 1
        },
      }
    };
  }
}
