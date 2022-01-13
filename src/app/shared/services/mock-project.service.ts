import { Injectable } from '@angular/core';
import { Complexity } from 'build/openapi/model/complexity';
import { Project } from 'build/openapi/model/project';
import { State } from 'build/openapi/model/state';

@Injectable({
  providedIn: 'root'
})
export class MockProjectService {

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
          done: true,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        },
        {
          id: '2',
          title: 'A subtask 2',
          description: 'This is a subtask for the project.',
          done: false,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        },
        {
          id: '3',
          title: 'A subtask 3',
          description: 'This is a subtask for the project.',
          done: false,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        }
      ],
      state: State.InProgress,
      complexity: Complexity.Medium,
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
      state: State.Initiated,
      complexity: Complexity.Easy,
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
      state: State.InProgress,
      complexity: Complexity.Difficult,
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
      state: State.Halted,
      complexity: Complexity.Easy,
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
      tasks: [
        {
          id: '1',
          title: 'A subtask 1',
          description: 'This is a subtask for the project.',
          done: true,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        },
        {
          id: '2',
          title: 'A subtask 2',
          description: 'This is a subtask for the project.',
          done: false,
          estimatedDurationInHours: 13,
          result: 'More knowledge'
        }
      ],
      state: State.Finished,
      complexity: Complexity.Medium,
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
    let position: number = this.getIndexOfProjectById(id);
    return this.mockProjects[position];
  }

  getIndexOfProjectById(id: string): number {
    return this.mockProjects.map(function(project) {
      return project.id
    }).indexOf(id);
  }

  getAllProjects(): Project[] {
    // TODO: implement real call to API
    return this.mockProjects;
  }

  updateProject(project: Project): void {
    console.log('updating project ' + project.id);
    console.log(project);
  }

  createProject(project: Project): void {
    console.log('create project');
    console.log(project);
  }

  deleteProject(id?: string): void {
    console.log('deleting project ' + id);
  }
}
