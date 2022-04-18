import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'build/openapi/model/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Project, ProjectService, State, TaskService } from 'build/openapi';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskForm: FormGroup;
  editExistingTask: boolean = false;
  task: Task = this.setupNewTask();
  projectState: State = State.InProgress;
  projectId: string;

  stateEnum = State;
  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly projectService: ProjectService,
    private readonly taskService: TaskService,
    private readonly formBuilder: FormBuilder,
    private router: Router) {
      this.activatedRoute.params.subscribe(params => {
        this.projectService.getProjectById(params.projectId).subscribe(project => {
          this.projectState = project.state;
          this.projectId = project.id!;
        });

        if(params.taskId) {
          this.editExistingTask = true;
          this.taskService.getTaskById(params.taskId).subscribe(task => {
            this.setupTaskForm();
            this.initTaskForm(task);
            this.task.id = task.id;

            this.taskForm.valueChanges.subscribe(t => {
              this.task.title = t.title;
              this.task.description = t.description;
              this.task.estimatedDurationInHours = t.estimatedDurationInHours;
              this.task.done = t.done;
            });
          });
        } else {
          this.setupTaskForm();
          this.taskForm.valueChanges.subscribe(t => {
            this.task.title = t.title;
            this.task.description = t.description;
            this.task.estimatedDurationInHours = t.estimatedDurationInHours;
            this.task.done = t.done;
          });
        }
      });
    }

  ngOnInit(): void {}

  private initTaskForm(task: Task): void {
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      estimatedDurationInHours: task.estimatedDurationInHours,
      done: task.done
    });
  }

  private setupTaskForm(): void {
    this.taskForm = this.formBuilder.group({
      title: [
        this.task.title, [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      description: [
        this.task.description
      ],
      estimatedDurationInHours: [
        this.task.estimatedDurationInHours,
        Validators.min(0)
      ],
      done: [
        this.task.done,
        Validators.required
      ]
    });
  }

  private setupNewTask(): Task {
    return {
      id: '',
      title: '',
      description: '',
      done: false,
      estimatedDurationInHours: 0,
      result: ''
    }
  }

  saveTask(): void {
    if(confirm("Do you want to save the project?")) {
      if(this.editExistingTask) {
        this.taskService.updateTask(this.task.id!, this.task).subscribe();
      } else {
        this.projectService.createTask(this.projectId, this.task).subscribe();
      }
      this.router.navigate(['/']);
    }
  }

  deleteTask(): void {
    if(confirm("Do you want to delete the project?")) {
      this.taskService.deleteTask(this.task.id!);
      this.router.navigate(['/']);
    }
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
