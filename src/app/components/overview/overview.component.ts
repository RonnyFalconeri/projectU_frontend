import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/components/traffic-light/Size';
import { Project } from 'src/app/shared/models/Project';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  projects: Project[];

  sizeEnum = Size;

  constructor(projectService: ProjectService) {
    this.projects = projectService.getAllProjects();
  }

  ngOnInit(): void {}

}
