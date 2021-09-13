import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';
import { Size } from '../traffic-light/Size';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/shared/services/project.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project: Project;

  public projectForm = this.fb.group({
    title: [''],
    description: [''],
    estimatedDurationInHours: [''],
    state: [''],
    complexity: ['']
  });

  sizeEnum = Size;
  stateEnum = State;
  faChevronLeft = faChevronLeft;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.project = this.projectService.getProjectById(params.id)
    });
  }

}
