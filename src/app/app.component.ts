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
  countOptions: object = {};
  currencyCountOptions: object = {};

  single: any[] = [
    {
      'name': 'Per second',
      'series': [
        {
          'name': 'Jan 2016',
          'value': 0
        },
        {
          'name': 'Apr 2016',
          'value': 115
        },
        {
          'name': 'Jul 2016',
          'value': 275
        },
        {
          'name': 'Oct 2016',
          'value': 300
        },
        {
          'name': 'Jan 2017',
          'value': 400
        },
        {
          'name': 'Apr 2017',
          'value': 650
        },
        {
          'name': 'Jul 2017',
          'value': 700
        },
        {
          'name': 'Oct 2017',
          'value': 815
        },
        {
          'name': 'Jan 2018',
          'value': 1250
        }
      ]
    }
  ];

  colorScheme = {
    domain: ['#fd7e14']
  };

  // line, area
  autoScale = true;

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
          opacity: 0.18,
          width: 1
        },
      }
    };

    this.countOptions = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      autostart: false
    };

    this.currencyCountOptions = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
      prefix: '$'
    };
  }
}
