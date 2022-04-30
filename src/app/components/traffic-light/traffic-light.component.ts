import { Component, Input, OnInit } from '@angular/core';
import { Complexity } from 'build/openapi/model/complexity';
import { Size } from 'src/app/shared/models/Size';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

  @Input() complexity: Complexity;
  @Input() horizontal: boolean;
  @Input() size: Size = Size.DEFAULT;

  sizeEnum = Size;
  complexityEnum = Complexity;

  constructor() {}

  ngOnInit(): void {}

}
