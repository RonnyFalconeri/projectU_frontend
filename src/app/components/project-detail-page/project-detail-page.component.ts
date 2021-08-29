import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/models/Project';
import { Size } from 'src/app/shared/models/Size';
import { State } from 'src/app/shared/models/State';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.scss']
})
export class ProjectDetailPageComponent implements OnInit {

  project: Project;
  sizeEnum = Size;

  constructor(private readonly activatedRoute: ActivatedRoute, projectService: ProjectService) {
    this.activatedRoute.params.subscribe((params) => {
      this.project = projectService.getProjectById(params.id)
    });
  }

  ngOnInit(): void {}

  getState() {
    switch(this.project.state) {
      case State.IN_PROGRESS:
        return 'in-progress';
      case State.HALTED:
        return 'halted';
      case State.FINISHED:
        return 'finished';
      default:
        return 'initiated';
    }
  }

}
