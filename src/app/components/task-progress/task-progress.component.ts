import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/models/Size';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.scss']
})
export class TaskProgressComponent implements OnInit {

  @Input() done: boolean;
  @Input() size: Size = Size.SMALL;

  sizeEnum = Size;

  constructor() {}

  ngOnInit(): void {}

}
