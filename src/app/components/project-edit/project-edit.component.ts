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
    title: ['', Validators.required],
    description: [''],
    estimatedDurationInHours: [''],
    state: ['', Validators.required],
    complexity: ['', Validators.required]
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
      this.project = this.projectService.getProjectById(params.id)
    });
  }

  save(): void {
    console.log(this.projectForm.value);
  }

  deleteProject(): void {
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
