import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Complexity } from 'src/app/shared/models/Complexity';
import { State } from 'src/app/shared/models/State';
import { By } from '@angular/platform-browser';
import { ProjectDetailPageComponent } from './project-detail-page.component';
import { Project } from 'src/app/shared/models/Project';

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
    expect(projectCard.classes['initiated']).toBeTruthy();
    expect(projectCard.classes['in-progress']).toBeFalsy();
    expect(projectCard.classes['halted']).toBeFalsy();
    expect(projectCard.classes['finished']).toBeFalsy();
  });

  it('should have in-progress class', () => {
    component.project = getProgressedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(projectCard.classes['initiated']).toBeFalsy();
    expect(projectCard.classes['in-progress']).toBeTruthy();
    expect(projectCard.classes['halted']).toBeFalsy();
    expect(projectCard.classes['finished']).toBeFalsy();
  });

  it('should have halted class', () => {
    component.project = getHaltedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(projectCard.classes['initiated']).toBeFalsy();
    expect(projectCard.classes['in-progress']).toBeFalsy();
    expect(projectCard.classes['halted']).toBeTruthy();
    expect(projectCard.classes['finished']).toBeFalsy();
  });

  it('should have finished class', () => {
    component.project = getFinishedProject();
    fixture.detectChanges();
    const projectCard = fixture.debugElement.query(By.css('.project-card'));
    expect(projectCard.classes['initiated']).toBeFalsy();
    expect(projectCard.classes['in-progress']).toBeFalsy();
    expect(projectCard.classes['halted']).toBeFalsy();
    expect(projectCard.classes['finished']).toBeTruthy();
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
    state: State.INITIATED,
    complexity: Complexity.EASY,
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
    state: State.IN_PROGRESS,
    complexity: Complexity.EASY,
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
    state: State.HALTED,
    complexity: Complexity.EASY,
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
    state: State.FINISHED,
    complexity: Complexity.EASY,
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
    state: State.FINISHED,
    complexity: Complexity.EASY,
    estimatedDurationInHours: 25,
    createdAt: '2021-08-12T22:06:50.078Z',
    expectedResult: 'A productive and meaningful event for education.',
    startedAt: '2021-08-12T22:08:50.078Z',
    finishedAt: '',
    actualResult: ''
  };
}

function getProjectWith3Tasks() {
  return {
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
        complexity: Complexity.EASY,
        estimatedDurationInHours: 13,
        result: 'More knowledge'
      },
      {
        id: '3',
        title: 'A subtask 3',
        description: 'This is a subtask for the project.',
        state: State.IN_PROGRESS,
        complexity: Complexity.DIFFICULT,
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
  };
}
