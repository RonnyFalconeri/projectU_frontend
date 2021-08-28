import { Component, Input, OnInit } from '@angular/core';
import { Complexity } from 'src/app/model/Complexity';
import { Size } from 'src/app/model/Size';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

  @Input() complexity: Complexity;
  @Input() size: Size;
  @Input() horizontal: boolean;

  constructor() {}

  ngOnInit(): void {}

  getSize() {
    switch(this.size) {
      case Size.SMALL:
        return 'small';
      case Size.BIG:
        return 'big';
      default:
        return 'default';
    }
  }

  getComplexity() {
    switch(this.complexity) {
      case Complexity.EASY:
        return 'easy';
      case Complexity.DIFFICULT:
        return 'difficult';
      default:
        return 'medium';
    }
  }

}
