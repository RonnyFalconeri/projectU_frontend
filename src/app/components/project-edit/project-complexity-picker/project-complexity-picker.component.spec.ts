import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComplexityPickerComponent } from './project-complexity-picker.component';

describe('ProjectComplexityPickerComponent', () => {
  let component: ProjectComplexityPickerComponent;
  let fixture: ComponentFixture<ProjectComplexityPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComplexityPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComplexityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
