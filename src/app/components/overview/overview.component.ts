import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/components/traffic-light/Size';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  projectService: ProjectService;
  sizeEnum = Size;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
  }

  ngOnInit(): void {}

}
