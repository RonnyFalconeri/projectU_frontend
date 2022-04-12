import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration, ProjectServiceInterface } from 'build/openapi';
import { Complexity } from 'build/openapi/model/complexity';
import { Project } from 'build/openapi/model/project';
import { State } from 'build/openapi/model/state';
import { Task } from 'build/openapi/model/task';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockProjectService implements ProjectServiceInterface {

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
      createdAt: 1649693507720,
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
      createdAt: 1649693507720,
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
      createdAt: 1649693507720,
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
      createdAt: 1649693507720,
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
      createdAt: 1649693507720,
      expectedResult: 'A productive and meaningful event for education.',
      startedAt: '2021-08-12T22:08:50.078Z',
      finishedAt: '',
      actualResult: ''
    }
  ]

  constructor() {}
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  getProjectById(id: string): Observable<Project> {
    let position: number = this.getIndexOfProjectById(id);
    return of(this.mockProjects[position]);
  }

  getTaskById(projectId: string, taskId: string): Task {
    let projectPosition: number = this.getIndexOfProjectById(projectId);
    let project = this.mockProjects[projectPosition];
    let taskPosition: number = this.getIndexOfTaskById(project, taskId);
    return project.tasks![taskPosition];
  }

  private getIndexOfProjectById(id: string): number {
    return this.mockProjects
      .map(project => { return project.id })
      .indexOf(id);
  }

  private getIndexOfTaskById(project: Project, taskId: string): number {
    return project.tasks!
      .map(task => { return task.id })
      .indexOf(taskId);
  }

  getAllProjects(): Observable<Array<Project>> {
    return of(this.mockProjects);
  }

  updateProject(id: string, project: Project): Observable<Project> {
    console.log('updating project ' + project.id);
    console.log(project);
    return of(project);
  }

  createProject(project: Project): Observable<Project> {
    console.log('create project');
    console.log(project);
    return of(project);
  }

  updateTask(projectId: string, task: Task): void {
    console.log('updating project ' + task.id);
    console.log(task);
  }

  createTask(projectId: string, task: Task): void {
    console.log('create task');
    console.log(task);
  }

  deleteProject(id: string): Observable<{}> {
    console.log('deleting project ' + id);
    return of();
  }

  deleteTask(projectId: string, taskId: string): void {
    console.log('deleting project ' + taskId + ' of project ' + projectId);
  }
}
