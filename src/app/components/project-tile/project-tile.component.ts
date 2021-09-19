import { Project } from 'src/app/shared/models/Project';
import {Component, Input, OnInit} from "@angular/core";
import {Size} from "../traffic-light/Size";
import { State } from 'src/app/shared/models/State';
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
