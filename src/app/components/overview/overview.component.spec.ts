import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Complexity } from 'build/openapi/model/complexity';
import { State } from 'build/openapi/model/state';
import { By } from '@angular/platform-browser';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: enable when project tile component is created
  xit('should display 3 project tiles', () => {
    component.projects = [{
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
    }];
    fixture.detectChanges();
    const projectList = fixture.debugElement.queryAll(By.css('.project-list app-project-tile'));
    expect(projectList.length).toEqual(3);
  });
});
