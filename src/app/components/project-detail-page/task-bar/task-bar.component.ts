import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/models/Size';
import { Task } from 'src/app/shared/models/Task';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss']
})
export class TaskBarComponent implements OnInit {

  sizeEnum = Size;
  faStopwatch = faStopwatch;

  @Input() task: Task;


  constructor() {}

  ngOnInit(): void {}

}
