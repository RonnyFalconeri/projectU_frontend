import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatePickerComponent } from './task-state-picker.component';

describe('TaskStatePickerComponent', () => {
  let component: TaskStatePickerComponent;
  let fixture: ComponentFixture<TaskStatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
