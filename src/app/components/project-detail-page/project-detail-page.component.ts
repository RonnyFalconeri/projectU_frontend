import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Size } from 'src/app/shared/models/Size';
import { ProjectService } from 'src/app/shared/services/project.service';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { State } from 'build/openapi/model/state';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.scss']
})
export class ProjectDetailPageComponent implements OnInit {

  project: Project;

  sizeEnum = Size;
  stateEnum = State;
  faStopwatch = faStopwatch;
  faEdit = faEdit;
  faChevronLeft = faChevronLeft;

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: ProjectService) {
    this.activatedRoute.params.subscribe((params) => {
      this.project = projectService.getProjectById(params.id)
    });
  }

  ngOnInit(): void {}

}
