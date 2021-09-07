import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/components/traffic-light/Size';
import { Task } from 'src/app/shared/models/Task';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss']
})
export class TaskBarComponent implements OnInit {

  @Input() task: Task;

  sizeEnum = Size;
  faStopwatch = faStopwatch;

  constructor() {}

  ngOnInit(): void {}

}
