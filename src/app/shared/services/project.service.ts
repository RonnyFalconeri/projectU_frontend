import { Injectable } from '@angular/core';
import { Complexity } from 'src/app/shared/models/Complexity';
import { Project } from 'src/app/shared/models/Project';
import { State } from 'src/app/shared/models/State';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private mockProjects: Project[] = [
    {
      id: '1',
      title: 'Test Project 1',
      description: 'A simple project just for testing things...',
      tasks: [
        {
          id: '1',
          title: 'A subtask 1',
          description: 'This is a subtask for the project.',
          state: State.IN_PROGRESS,
          complexity: Complexity.MEDIUM,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        },
        {
          id: '2',
          title: 'A subtask 2',
          description: 'This is a subtask for the project.',
          state: State.IN_PROGRESS,
          complexity: Complexity.MEDIUM,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        },
        {
          id: '3',
          title: 'A subtask 3',
          description: 'This is a subtask for the project.',
          state: State.IN_PROGRESS,
          complexity: Complexity.MEDIUM,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        }
      ],
      state: State.IN_PROGRESS,
      complexity: Complexity.MEDIUM,
      estimatedDurationInHours: 25,
      createdAt: '2021-08-12T22:06:50.078Z',
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    },
    {
      id: '2',
      title: 'Test Project 2',
      description: 'A simple project just for testing things...',
      tasks: [],
      state: State.INITIATED,
      complexity: Complexity.EASY,
      estimatedDurationInHours: 25,
      createdAt: '2021-08-12T22:06:50.078Z',
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    },
    {
      id: '3',
      title: 'Test Project 3',
      description: 'A simple project just for testing things...',
      tasks: [],
      state: State.IN_PROGRESS,
      complexity: Complexity.DIFFICULT,
      estimatedDurationInHours: 25,
      createdAt: '2021-08-12T22:06:50.078Z',
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    },
    {
      id: '4',
      title: 'Test Project 4',
      description: 'A simple project just for testing things...',
      tasks: [],
      state: State.HALTED,
      complexity: Complexity.EASY,
      estimatedDurationInHours: 25,
      createdAt: '2021-08-12T22:06:50.078Z',
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    },
    {
      id: '5',
      title: 'Test Project 5',
      description: 'A simple project just for testing things...',
      tasks: [],
      state: State.FINISHED,
      complexity: Complexity.MEDIUM,
      estimatedDurationInHours: 25,
      createdAt: '2021-08-12T22:06:50.078Z',
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    }
  ]

  constructor() {}

  getProjectById(id: string): Project {
    // TODO: implement real call to API
    return this.mockProjects[0];
  }

  getAllProjects(): Project[] {
    // TODO: implement real call to API
    return this.mockProjects;
  }
}
