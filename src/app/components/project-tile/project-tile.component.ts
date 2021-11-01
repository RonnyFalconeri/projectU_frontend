import { Project } from 'build/openapi/model/project';
import { Component, Input, OnInit } from "@angular/core";
import { Size } from "src/app/shared/models/Size";
import { State } from 'build/openapi/model/state';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})

export class ProjectTileComponent implements OnInit {

  @Input() project: Project;
  @Input() state: State;

  faStopwatch = faStopwatch;
  stateEnum = State;
  sizeEnum = Size;

  constructor() {}

  ngOnInit(): void {}
}
