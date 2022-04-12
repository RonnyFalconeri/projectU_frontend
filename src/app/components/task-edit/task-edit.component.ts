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
    private  projectService: ProjectService,
    private  taskService: TaskService,
    private readonly formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.initiateAttributes();
  }

  private initiateAttributes(): void {
    this.activatedRoute.params.subscribe(params => {
      this.projectId = params.projectId;
      this.determineProjectState(this.projectId);
      this.determineEditMode(params.taskId);
    });
    this.setupTaskForm();
  }

  private determineProjectState(projectId: string): void {
    this.projectService.getProjectById(projectId)
      .subscribe((project: Project) => this.projectState = project.state);
  }

  private determineEditMode(taskId: string): void {
    if(taskId) {
      this.task = this.taskService.getTaskById(taskId);
      this.editExistingTask = true;
    }
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
    if(this.editExistingTask) {
      this.taskService.updateTask(this.projectId, this.task);
    } else {
      this.taskService.createTask(this.projectId, this.task);
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
