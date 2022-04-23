import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'build/openapi/model/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Project, ProjectService, State, TaskService } from 'build/openapi';
import { ProjectUtilService } from 'src/app/shared/services/project-util.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  project: Project = this.projectUtil.setupEmptyProject();
  task: Task = this.projectUtil.setupEmptyTask();
  taskForm: FormGroup;

  stateEnum = State;
  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(private readonly projectService: ProjectService,
              private readonly projectUtil: ProjectUtilService,
              private readonly taskService: TaskService,
              private readonly formBuilder: FormBuilder,
              private router: Router) {
      let projectId = router.url.split('/')[3];
      this.projectService.getProjectById(projectId).subscribe(project => {
        this.project = project;
        if(this.isEditingExistingTask()) {
          let taskId = router.url.split('/')[5];
          this.taskService.getTaskById(taskId).subscribe(task => {
            this.task = task;
            this.setupTaskForm(this.task);
            this.subscribeToFormChanges();
          });
        } else {
          this.setupTaskForm(this.task);
          this.subscribeToFormChanges();
        }
      });
    }

  ngOnInit(): void {}

  private setupTaskForm(task: Task): void {
    this.taskForm = this.formBuilder.group({
      title: [
        task.title, [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      description: [
        task.description
      ],
      estimatedDurationInHours: [
        task.estimatedDurationInHours,
        Validators.min(0)
      ],
      done: [
        task.done,
        Validators.required
      ]
    });
  }

  private subscribeToFormChanges(): void {
    this.taskForm.valueChanges.subscribe(t => {
      this.task.title = t.title;
      this.task.description = t.description;
      this.task.estimatedDurationInHours = t.estimatedDurationInHours;
      this.task.done = t.done;
    });
  }

  isEditingExistingTask(): boolean {
    return this.router.url.split('/')[1] === 'edit';
  }

  saveTask(): void {
    if(confirm("Do you want to save the project?")) {
      if(this.isEditingExistingTask()) {
        this.taskService.updateTask(this.task.id!, this.task).subscribe();
      } else {
        this.projectService.createTask(this.project.id!, this.task).subscribe();
      }
      this.navigateToProjectDetailPage();
    }
  }

  deleteTask(): void {
    if(confirm("Do you want to delete the project?")) {
      this.taskService.deleteTask(this.task.id!).subscribe();
      this.navigateToProjectDetailPage();
    }
  }

  private navigateToProjectDetailPage(): void {
    this.router.navigate(['project', this.project.id]).then(() => {
      window.location.reload();
    });
  }

  changeIsTaskDone(): void {
    this.task.done = this.taskForm.get('done')?.value;
  }

  get title() {
    return this.taskForm.get('title');
  }

  get state() {
    return this.taskForm.get('done');
  }

}
