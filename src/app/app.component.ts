import {AfterViewInit, Component} from '@angular/core';
import {FidgetSpinner} from './ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  canvas: any;
  image: any;
  ctx: any;
  width: number;
  height: number;
  balls: FidgetSpinner[] = [];

  navigationCollapsed = true;

  graphData = [
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

  graphColorScheme = {
    domain: ['#fd7e14']
  };

  particleStyle = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0
  };

  particleParams = {
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

  countUpOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    autostart: false
  };

  countUpCurrencyOptions = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '$'
  };

  static random(min, max) {
    // if min = 10 max = 15 random var = 0.1544465; it will return approzimately 10 because of math.floor
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngAfterViewInit(): void {
    this.canvas = document.querySelector('canvas');
    this.image = document.getElementById('fidget');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = document.querySelector('.intro').clientWidth;
    this.height = this.canvas.height = document.querySelector('.intro').clientHeight * 2;
  }

  loop() {

    console.log('loop called');

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    while (this.balls.length < 25) {
      const x = AppComponent.random(0, this.width);
      const y = AppComponent.random(0, this.height);
      const velX = AppComponent.random(-7, 7);
      const velY = AppComponent.random(-7, 7);
      const ball = new FidgetSpinner(x, y, velX, velY, 15);
      this.balls.push(ball);
    }

    for (let i = 0; i < this.balls.length; i++) {
      this.balls[i].draw(this.ctx, this.image);
      this.balls[i].update(this.width, this.height);
    }

    requestAnimationFrame(() => this.loop());
  }

}
