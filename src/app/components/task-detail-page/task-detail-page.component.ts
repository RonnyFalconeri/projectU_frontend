import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockProjectService } from 'src/app/shared/services/mock-project.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { Task } from 'build/openapi/model/task';
import { State } from 'build/openapi/model/state';


@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.scss']
})
export class TaskDetailPageComponent implements OnInit {

  project: Project;
  task: Task;
  taskAfter: Task;

  stateEnum = State;
  faEdit = faEdit;
  faChevronLeft = faChevronLeft;

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: MockProjectService) {
    this.activatedRoute.params.subscribe((params) => {
      this.project = projectService.getProjectById(params.id);
      this.task = this.project.tasks[0];
      this.taskAfter = this.project.tasks[1];
    });
  }

  ngOnInit(): void {}

}
