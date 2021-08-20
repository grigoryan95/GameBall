import {Component} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  level: number = 1;
  click: number = 0;
  isDisable: boolean = true;
  top:number = 50;
  left:number = 50;
  time:number = 1000;
  height:number = 200;
  width:number = 200;
  r: number = 59
  g: number = 177
  b: number = 111

  inContainer(): void {
    this.click++;
  }

  ballClick(): void {
    this.level++;
    this.time *= 0.75;
    this.width -= 5;
    this.height -= 5;
    this.r = Math.floor(Math.random() * 255)
    this.g = Math.floor(Math.random() * 255)
    this.b = Math.floor(Math.random() * 255)
  }

  reset(): void {
    this.level = 1;
    this.click = 0;
    this.isDisable = true;
  }

  start(): void {
    this.isDisable = false;
    setTimeout(() => {
      this.top = Math.random() * (window.innerHeight - 200);
      this.left = Math.random() * (window.innerHeight * 0.8 - 200);
      this.start()
    },this.time)
  }

}
