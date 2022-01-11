import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockProjectService } from 'src/app/shared/services/mock-project.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronDown, faChevronUp, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { Task } from 'build/openapi/model/task';
import { State } from 'build/openapi/model/state';
import { Size } from 'src/app/shared/models/Size';



@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.scss']
})
export class TaskDetailPageComponent implements OnInit {

  project: Project;
  task: Task;
  currentTaskPosition: number;

  sizeEnum = Size;
  stateEnum = State;

  faEdit = faEdit;
  faStopwatch = faStopwatch;
  faChevronLeft = faChevronLeft;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: MockProjectService) {
    this.activatedRoute.params.subscribe((params) => {

      // TODO: get task.id and project.id from routes
      let projectId: string = params.id;
      this.project = projectService.getProjectById(projectId);

      // TODO: determine currentTaskPosition
      this.currentTaskPosition = 0;

      // TODO: get task by id -> write method for it
      this.task = this.project.tasks[this.currentTaskPosition];
    });
  }

  ngOnInit(): void {}

  isTherePreviousTask(): boolean {
    let previousTaskPosition: number = this.currentTaskPosition-1;

    if(previousTaskPosition < 0) {
      return false;
    }
    return true;
  }

  isThereNextTask(): boolean {
    let nextTaskPosition: number = this.currentTaskPosition+1;
    let totalTaskCount: number = this.project.tasks.length;

    if(nextTaskPosition < totalTaskCount) {
      return true;
    }
    return false;
  }

  changeToPreviousTask(): void {
    if(this.isTherePreviousTask()) {
      this.currentTaskPosition--;
      this.task = this.project.tasks[this.currentTaskPosition];
    }
  }

  changeToNextTask(): void {
    if(this.isThereNextTask()) {
      this.currentTaskPosition++;
      this.task = this.project.tasks[this.currentTaskPosition];
    }
  }
}
