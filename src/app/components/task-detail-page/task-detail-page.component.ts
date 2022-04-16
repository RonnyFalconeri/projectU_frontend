import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronDown, faChevronUp, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { Router } from '@angular/router';
import { Task } from 'build/openapi/model/task';
import { State } from 'build/openapi/model/state';
import { Size } from 'src/app/shared/models/Size';
import { ProjectService, TaskService } from 'build/openapi';
import { Observable } from 'rxjs';


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

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: ProjectService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      let projectId: string = params.projectId;
      let taskId: string = params.taskId;

      projectService.getProjectById(projectId)
        .subscribe(project => this.project = project);

      this.currentTaskPosition = this.getIndexOfTaskById(taskId);
      this.task = this.project.tasks![this.currentTaskPosition];
    });
  }

  ngOnInit(): void {}

  getIndexOfTaskById(id: string): number {
    return this.project.tasks!.map(function(task) {
      return task.id
    }).indexOf(id);
  }

  isTherePreviousTask(): boolean {
    let previousTaskPosition: number = this.currentTaskPosition-1;

    if(previousTaskPosition < 0) {
      return false;
    }
    return true;
  }

  isThereNextTask(): boolean {
    let nextTaskPosition: number = this.currentTaskPosition+1;
    let totalTaskCount: number = this.project.tasks!.length;

    if(nextTaskPosition < totalTaskCount) {
      return true;
    }
    return false;
  }

  changeToPreviousTask(): void {
    if(this.isTherePreviousTask()) {
      this.currentTaskPosition--;
      this.task = this.project.tasks![this.currentTaskPosition];
      this.changeUrlParamToCurrentTaskId(this.task.id!);
    }
  }

  changeToNextTask(): void {
    if(this.isThereNextTask()) {
      this.currentTaskPosition++;
      this.task = this.project.tasks![this.currentTaskPosition];
      this.changeUrlParamToCurrentTaskId(this.task.id!);
    }
  }

  changeUrlParamToCurrentTaskId(taskId: string) {
    this.router.navigate(['project', this.project.id, 'task', taskId]);
  }
}
