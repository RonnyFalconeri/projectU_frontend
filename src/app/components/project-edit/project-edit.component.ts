import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';
import { Size } from '../traffic-light/Size';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project: Project;

  sizeEnum = Size;
  stateEnum = State;
  faChevronLeft = faChevronLeft;

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: ProjectService) {
    this.activatedRoute.params.subscribe((params) => {
      this.project = projectService.getProjectById(params.project)
    });
  }


  ngOnInit(): void {
  }

}
