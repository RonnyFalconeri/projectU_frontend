import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/models/Size';
import { MockProjectService } from 'src/app/shared/services/mock-project.service';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  projects: Project[];

  sizeEnum = Size;
  faThLarge = faThLarge;
  faPlus = faPlus;

  constructor(projectService: MockProjectService) {
    this.projects = projectService.getAllProjects();
  }

  ngOnInit(): void {}

}
