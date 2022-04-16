import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/shared/models/Size';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'build/openapi/model/project';
import { ProjectService } from 'build/openapi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  projects$: Observable<Project[]>;

  sizeEnum = Size;
  faThLarge = faThLarge;
  faPlus = faPlus;

  constructor(projectService: ProjectService) {
    this.projects$ = projectService.getAllProjects();
  }

  ngOnInit(): void {}

}
