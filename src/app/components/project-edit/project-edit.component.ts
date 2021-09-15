import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';
import { ProjectService } from 'src/app/shared/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Complexity } from 'src/app/shared/models/Complexity';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project: Project = this.setupNewProject();
  projectForm: FormGroup;
  editMode: boolean;
  stateEnum = State;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private readonly fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if(params.id) {
        this.editMode = true;
        this.project = this.projectService.getProjectById(params.id);
      } else {
        this.editMode = false;
      }
    });

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
          disabled: !this.editMode
        },
        Validators.required
      ],
      complexity: [
        this.project.complexity,
        Validators.required
      ]
    });
  }

  setupNewProject(): Project {
    return {
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
  }

  save(): void {
    // TODO: use project service to store values
    console.log(this.projectForm.value);
  }

  deleteProject(): void {
    // TODO: use project service to delete project
    if(confirm("Do you want to delete the project?")) {
      console.log('deleting project...');
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
