import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';
import { ProjectService } from 'src/app/shared/services/project.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Complexity } from 'src/app/shared/models/Complexity';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project: Project;

  public projectForm = this.fb.group({
    title: [
      '',
      // default value for title does not work if required
      //Validators.required,
      Validators.maxLength(100),
    ],
    description: [''],
    estimatedDurationInHours: [
      '',
      Validators.min(0)
    ],
    state: [
      '',
      Validators.required
    ],
    complexity: [
      '',
      Validators.required
    ]
  });

  keys = Object.keys;
  stateEnum = State;
  complexityEnum = Complexity;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private readonly fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params.id) {
        // if parameter in routes exist -> edit project
        this.project = this.projectService.getProjectById(params.id);
      } else {
        // if no parameter exists -> new project
        // setup new project
        this.project = this.setupNewProject();
      }
    });
    this.setInitialValues();
  }

  setupNewProject(): Project {
    let newProject: Project = {
        id: '',
        title: '',
        description: '',
        tasks: [],
        state: State.INITIATED,
        complexity: Complexity.EASY,
        estimatedDurationInHours: 0,
        createdAt: '',
        expectedResult: '',
        startedAt: '',
        finishedAt: '',
        actualResult: ''
      }
    return newProject;
  }

  setInitialValues() {
    this.projectForm.get('title')?.setValue(this.project.title);
    this.projectForm.get('description')?.setValue(this.project.description);
    this.projectForm.get('estimatedDurationInHours')?.setValue(this.project.estimatedDurationInHours);
  }

  save(): void {
    // TODO: use project service to store values
    console.log(this.projectForm.value);
  }

  deleteProject(): void {
    // TODO: use project service to delete project
    console.log('deleting project...');
    this.router.navigate(['/']);
  }

  changeState($event: any): void {
    this.projectForm.get('state')?.setValue($event.target.value);
  }

  changeComplexity($event: any): void {
    this.projectForm.get('complexity')?.setValue($event.target.value);
  }

}
