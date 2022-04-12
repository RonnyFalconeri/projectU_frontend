import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'build/openapi/model/project';
import { State } from 'build/openapi/model/state';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Complexity } from 'build/openapi/model/complexity';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'build/openapi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  projectForm: FormGroup;
  editExistingProject: boolean = false;
  project: Observable<Project> = this.setupNewProject();

  stateEnum = State;
  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly projectService: ProjectService,
    private readonly fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.determineEditMode();
    this.setupProjectForm();
  }

  private determineEditMode(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.projectId) {
        this.editExistingProject = true;
        this.project = this.projectService.getProjectById(params.projectId);
      }
    });
  }

  private setupProjectForm(): void {
    this.projectForm = this.fb.group({
      title: [
        this.project.title, [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      description: [
        this.project.description
      ],
      estimatedDurationInHours: [
        this.project.estimatedDurationInHours,
        Validators.min(0)
      ],
      state: [
        {
          value: this.project.state,
          disabled: !this.editExistingProject
        }, [
          Validators.required,
          this.validateState(this.project.state)
        ]
      ],
      complexity: [
        this.project.complexity,
        Validators.required
      ]
    });
  }

  private setupNewProject(): Project {
    return {
      id: '',
      title: '',
      description: '',
      tasks: [],
      state: State.Initiated,
      complexity: Complexity.Easy,
      estimatedDurationInHours: 0,
      createdAt: 0,
      expectedResult: '',
      startedAt: '',
      finishedAt: '',
      actualResult: ''
    }
  }

  saveProject(): void {
    if(this.editExistingProject) {
      this.projectService.updateProject(this.project);
    } else {
      this.projectService.createProject(this.project);
    }
  }

  deleteProject(): void {
    if(confirm("Do you want to delete the project?")) {
      this.projectService.deleteProject(this.project.id!);
      this.router.navigate(['/']);
    }
  }

  changeState(): void {
    this.project.state = this.projectForm.get('state')?.value;
  }

  changeComplexity(): void {
    this.project.complexity = this.projectForm.get('complexity')?.value;
  }

  get title() {
    return this.projectForm.get('title');
  }

  get state() {
    return this.projectForm.get('state');
  }

  validateState(originalState: State) {

    return (control: AbstractControl):{[key: string]: boolean} | null => {

      if(this.editExistingProject &&
        originalState !== State.Initiated &&
        control.value === State.Initiated) {
        return {'Cannot go back to initiated when editing a project': true}
      }

      if(!this.editExistingProject &&
        control.value !== State.Initiated) {
        return {'Cannot change state when creating new project': true}
      }

      return null;
    };
  }

}
