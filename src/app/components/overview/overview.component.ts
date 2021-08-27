import { Component, OnInit } from '@angular/core';
import { Complexity } from 'src/app/model/Complexity';
import { Size } from 'src/app/model/Size';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  complexity: Complexity = Complexity.EASY;
  size: Size = Size.SMALL;
  horizontal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

}
