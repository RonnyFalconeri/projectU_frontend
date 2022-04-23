import { Injectable } from '@angular/core';
import { Complexity, Project, State, Task } from 'build/openapi';

@Injectable({
  providedIn: 'root'
})
export class ProjectUtilService {

  constructor() {}

  public setupEmptyProject(): Project {
    return {
      id: '',
      title: '',
      description: '',
      tasks: [],
      state: State.Initiated,
      complexity: Complexity.Easy,
      estimatedDurationInHours: 0,
      createdAt: 0,
      expectedResult: '',
      startedAt: '',
      finishedAt: '',
      actualResult: ''
    }
  }

  public setupEmptyTask(): Task {
    return {
      id: '',
      title: '',
      description: '',
      done: false,
      estimatedDurationInHours: 0,
      result: ''
    }
  }
}
