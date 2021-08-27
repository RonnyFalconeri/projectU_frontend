import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

  // TODO: use enum instead of string for complexity
  @Input() complexity: string;

  constructor() {}

  ngOnInit(): void {}

}
