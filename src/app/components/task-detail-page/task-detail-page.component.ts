import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronDown, faChevronUp, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { Router } from '@angular/router';
import { Task } from 'build/openapi/model/task';
import { State } from 'build/openapi/model/state';
import { Size } from 'src/app/shared/models/Size';
import { ProjectService } from 'build/openapi';
import { ProjectUtilService } from 'src/app/shared/services/project-util.service';


@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.scss']
})
export class TaskDetailPageComponent implements OnInit {

  project: Project = this.projectUtil.setupEmptyProject();
  task: Task = this.projectUtil.setupEmptyTask();
  currentTaskPosition: number;

  sizeEnum = Size;
  stateEnum = State;

  faEdit = faEdit;
  faStopwatch = faStopwatch;
  faChevronLeft = faChevronLeft;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor(readonly projectService: ProjectService,
              private readonly projectUtil: ProjectUtilService,
              private router: Router) {
      let projectId = router.url.split('/')[2];
      let taskId = router.url.split('/')[4];
      projectService.getProjectById(projectId).subscribe(project => {
        this.project = project;
        this.currentTaskPosition = this.getIndexOfTaskById(taskId);
        this.task = this.project.tasks![this.currentTaskPosition];
      });
  }

  ngOnInit(): void {}

  private getIndexOfTaskById(id: string): number {
    return this.project.tasks!.map(function(task) {
      return task.id
    }).indexOf(id);
  }

  isTherePreviousTask(): boolean {
    let previousTaskPosition: number = this.currentTaskPosition;
    return previousTaskPosition > 0;
  }

  isThereNextTask(): boolean {
    let nextTaskPosition: number = this.currentTaskPosition+1;
    let totalTaskCount: number = this.project.tasks!.length;
    return nextTaskPosition < totalTaskCount;
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
