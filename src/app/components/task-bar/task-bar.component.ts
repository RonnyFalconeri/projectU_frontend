import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss']
})
export class TaskBarComponent implements OnInit {

  @Input() task: Task;

  constructor() {}

  ngOnInit(): void {}

}
