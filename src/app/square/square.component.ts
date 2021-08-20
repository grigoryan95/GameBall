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
  top:number = 264;
  left:number = 545;
  time:number = 1000;
  height:number = 200;
  width:number = 200;

  inContainer(): void {
    this.click++;
  }

  ballClick(): void {
    this.level++;
    this.time *= 0.75;
    this.width -= 5;
    this.height -= 5;
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
      this.left = Math.random() * (window.innerHeight * 0.8 - -450);
      this.start()
    },this.time)
  }

}
