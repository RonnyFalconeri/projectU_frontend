import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'build/openapi/model/project';
import { State } from 'build/openapi/model/state';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'build/openapi';
import { ProjectUtilService } from 'src/app/shared/services/project-util.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  projectForm: FormGroup;
  project: Project = this.projectUtil.setupEmptyProject();

  stateEnum = State;
  faPen = faPen;
  faStopwatch = faStopwatch;
  faPlusSquare = faPlusSquare;

  constructor(private readonly projectService: ProjectService,
              private readonly projectUtil: ProjectUtilService,
              private readonly fb: FormBuilder,
              private router: Router) {
    if(this.isEditingExistingProject()) {
      let projectId = router.url.split('/')[3];
      this.projectService.getProjectById(projectId).subscribe(project => {
          this.project = project;
          this.setupProjectForm(this.project);
          this.subscribeToFormChanges();
      });
    } else {
      this.setupProjectForm(this.project);
      this.subscribeToFormChanges();
    }
  }

  ngOnInit(): void {}

  private setupProjectForm(project: Project): void {
    this.projectForm = this.fb.group({
      title: [
        project.title, [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      description: [
        project.description
      ],
      estimatedDurationInHours: [
        project.estimatedDurationInHours,
        Validators.min(0)
      ],
      state: [
        {
          value: project.state,
          disabled: !this.isEditingExistingProject()
        }, [
          Validators.required,
          this.validateState(project.state)
        ]
      ],
      complexity: [
        project.complexity,
        Validators.required
      ]
    });
  }

  private subscribeToFormChanges(): void {
    this.projectForm.valueChanges.subscribe(p => {
      this.project.title = p.title;
      this.project.description = p.description;
      this.project.estimatedDurationInHours = p.estimatedDurationInHours;
      this.project.state = p.state;
      this.project.complexity = p.complexity;
    });
  }

  isEditingExistingProject(): boolean {
    return this.router.url.split('/')[1] === 'edit';
  }

  saveProject(): void {
    if(confirm("Do you want to save the project?")) {
      if(this.isEditingExistingProject()) {
        this.projectService.updateProject(this.project.id!, this.project).subscribe();
      } else {
        this.projectService.createProject(this.project).subscribe();
      }
      this.navigateToProjectDetailPage();
    }
  }

  deleteProject(): void {
    if(confirm("Do you want to delete the project?")) {
      this.projectService.deleteProject(this.project.id!).subscribe();
      this.navigateToProjectDetailPage();
    }
  }

  navigateToProjectDetailPage(): void {
    this.router.navigate(['project', this.project.id]).then(() => {
      window.location.reload();
    });
  }

  changeState(): void {
    this.project.state = this.projectForm.get('state')?.value;
  }

  changeComplexity(): void {
    this.project.complexity = this.projectForm.get('complexity')?.value;
  }

  validateState(originalState: State) {

    return (control: AbstractControl):{[key: string]: boolean} | null => {

      if(this.isEditingExistingProject() &&
        originalState !== State.Initiated &&
        control.value === State.Initiated) {
        return {'Cannot go back to initiated when editing a project': true}
      }

      if(!this.isEditingExistingProject() &&
        control.value !== State.Initiated) {
        return {'Cannot change state when creating new project': true}
      }

      return null;
    };
  }

  get title() {
    return this.projectForm.get('title');
  }

  get state() {
    return this.projectForm.get('state');
  }

}
