import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Complexity } from 'build/openapi/model/complexity';
import { State } from 'build/openapi/model/state';
import { By } from '@angular/platform-browser';
import { ProjectDetailPageComponent } from './project-detail-page.component';
import { Project } from 'build/openapi/model/project';
import { DebugElement } from '@angular/core';

describe('ProjectDetailPageComponent', () => {
  let component: ProjectDetailPageComponent;
  let fixture: ComponentFixture<ProjectDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]) ],
      declarations: [ ProjectDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initiated class', () => {
    component.project = getInitiatedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(hasOnlyClassOfState(projectCard, State.Initiated)).toBeTruthy();
  });

  it('should have in-progress class', () => {
    component.project = getProgressedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(hasOnlyClassOfState(projectCard, State.InProgress)).toBeTruthy();
  });

  it('should have halted class', () => {
    component.project = getHaltedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(hasOnlyClassOfState(projectCard, State.Halted)).toBeTruthy();
  });

  it('should have finished class', () => {
    component.project = getFinishedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(hasOnlyClassOfState(projectCard, State.Finished)).toBeTruthy();
  });

  it('should have 0 task bars', () => {
    component.project = getProjectWith0Tasks();
    fixture.detectChanges();
    const taskList = fixture.debugElement.queryAll(By.css('.task-list app-task-bar'));
    expect(taskList.length).toEqual(0);
  });

  it('should have 3 task bars', () => {
    component.project = getProjectWith3Tasks();
    fixture.detectChanges();
    const taskList = fixture.debugElement.queryAll(By.css('.task-list app-task-bar'));
    expect(taskList.length).toEqual(3);
  });

});

function getInitiatedProject(): Project {
  return {
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
  };
}

function getProgressedProject(): Project {
  return {
    id: '2',
    title: 'Test Project 2',
    description: 'A simple project just for testing things...',
    tasks: [],
    state: State.InProgress,
    complexity: Complexity.Easy,
    estimatedDurationInHours: 25,
    createdAt: '2021-08-12T22:06:50.078Z',
    expectedResult: 'A productive and meaningful event for education.',
    startedAt: '2021-08-12T22:08:50.078Z',
    finishedAt: '',
    actualResult: ''
  };
}

function getHaltedProject(): Project {
  return {
    id: '2',
    title: 'Test Project 2',
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
  };
}

function getFinishedProject(): Project {
  return {
    id: '2',
    title: 'Test Project 2',
    description: 'A simple project just for testing things...',
    tasks: [],
    state: State.Finished,
    complexity: Complexity.Easy,
    estimatedDurationInHours: 25,
    createdAt: '2021-08-12T22:06:50.078Z',
    expectedResult: 'A productive and meaningful event for education.',
    startedAt: '2021-08-12T22:08:50.078Z',
    finishedAt: '',
    actualResult: ''
  };
}

function getProjectWith0Tasks(): Project {
  return {
    id: '2',
    title: 'Test Project 2',
    description: 'A simple project just for testing things...',
    tasks: [],
    state: State.Finished,
    complexity: Complexity.Easy,
    estimatedDurationInHours: 25,
    createdAt: '2021-08-12T22:06:50.078Z',
    expectedResult: 'A productive and meaningful event for education.',
    startedAt: '2021-08-12T22:08:50.078Z',
    finishedAt: '',
    actualResult: ''
  };
}

function getProjectWith3Tasks(): Project {
  return {
    id: '1',
    title: 'Test Project 1',
    description: 'A simple project just for testing things...',
    tasks: [
      {
        id: '1',
        title: 'A subtask 1',
        description: 'This is a subtask for the project.',
        state: State.InProgress,
        complexity: Complexity.Medium,
        estimatedDurationInHours: 13,
        result: 'More knowledge'
      },
      {
        id: '2',
        title: 'A subtask 2',
        description: 'This is a subtask for the project.',
        state: State.InProgress,
        complexity: Complexity.Easy,
        estimatedDurationInHours: 13,
        result: 'More knowledge'
      },
      {
        id: '3',
        title: 'A subtask 3',
        description: 'This is a subtask for the project.',
        state: State.InProgress,
        complexity: Complexity.Difficult,
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
  };
}

function hasOnlyClassOfState(element: DebugElement, state: State): boolean {
  switch (state) {
    case State.Initiated:
      return hasOnlyClassOfInitiated(element);
    case State.InProgress:
      return hasOnlyClassOfInProgress(element);
    case State.Halted:
      return hasOnlyClassOfHalted(element);
    case State.Finished:
      return hasOnlyClassOfFinished(element);
    default:
      return false;
  }
}

function hasOnlyClassOfInitiated(element: DebugElement): boolean {
  let initiated: boolean = element.classes['initiated'];
  let inProgress: boolean = element.classes['in-progress'];
  let halted: boolean = element.classes['halted'];
  let finished: boolean = element.classes['finished'];

  if(initiated && !inProgress && !halted && !finished) {
    return true;
  }

  return false;
}

function hasOnlyClassOfInProgress(element: DebugElement): boolean {
  let initiated: boolean = element.classes['initiated'];
  let inProgress: boolean = element.classes['in-progress'];
  let halted: boolean = element.classes['halted'];
  let finished: boolean = element.classes['finished'];

  if(!initiated && inProgress && !halted && !finished) {
    return true;
  }

  return false;
}

function hasOnlyClassOfHalted(element: DebugElement): boolean {
  let initiated: boolean = element.classes['initiated'];
  let inProgress: boolean = element.classes['in-progress'];
  let halted: boolean = element.classes['halted'];
  let finished: boolean = element.classes['finished'];

  if(!initiated && !inProgress && halted && !finished) {
    return true;
  }

  return false;
}

function hasOnlyClassOfFinished(element: DebugElement): boolean {
  let initiated: boolean = element.classes['initiated'];
  let inProgress: boolean = element.classes['in-progress'];
  let halted: boolean = element.classes['halted'];
  let finished: boolean = element.classes['finished'];

  if(!initiated && !inProgress && !halted && finished) {
    return true;
  }

  return false;
}
