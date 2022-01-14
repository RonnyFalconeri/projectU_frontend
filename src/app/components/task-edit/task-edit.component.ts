import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'build/openapi/model/task';
import { MockProjectService } from 'src/app/shared/services/mock-project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskForm: FormGroup;
  editExistingTask: boolean = false;
  task: Task = this.setupNewTask();

  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly projectService: MockProjectService,
    private readonly formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.determineEditMode();
    this.setupTaskForm();
  }

  private determineEditMode(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.taskId) {
        this.editExistingTask = true;
        this.task = this.projectService.getTaskById(params.projectId, params.taskId);
      }
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
        {
          value: this.task.done
        }, [
          Validators.required
        ]
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
    // TODO: determine projectId
    let projectId: string = '0';
    if(this.editExistingTask) {
      this.projectService.updateTask(projectId, this.task);
    } else {
      this.projectService.createTask(projectId, this.task);
    }
  }

  deleteTask(): void {
    if(confirm("Do you want to delete the project?")) {
      // TODO: determine projectId
      let projectId: string = '0';
      this.projectService.deleteTask(projectId, this.task.id);
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
