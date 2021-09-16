import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';
import { ProjectService } from 'src/app/shared/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Complexity } from 'src/app/shared/models/Complexity';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  projectForm: FormGroup;
  editExistingProject: boolean = false;
  project: Project = this.setupNewProject();

  stateEnum = State;
  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private readonly fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.determineEditMode();
    this.setupProjectForm();
  }

  private determineEditMode(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params.id) {
        this.editExistingProject = true;
        this.project = this.projectService.getProjectById(params.id);
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
        },
        Validators.required
      ],
      complexity: [
        this.project.complexity,
        Validators.required
      ]
    });
  }

  private setupNewProject(): Project {
    return {
        id: undefined,
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
      this.projectService.deleteProject(this.project.id);
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

}
