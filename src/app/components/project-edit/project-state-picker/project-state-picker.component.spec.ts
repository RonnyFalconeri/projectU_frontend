import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatePickerComponent } from './project-state-picker.component';

describe('ProjectStatePickerComponent', () => {
  let component: ProjectStatePickerComponent;
  let fixture: ComponentFixture<ProjectStatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
