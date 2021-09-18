import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectComplexityPickerComponent } from './project-complexity-picker/project-complexity-picker.component';
import { ProjectEditComponent } from './project-edit.component';
import { ProjectStatePickerComponent } from './project-state-picker/project-state-picker.component';

describe('ProjectEditComponent', () => {
  let component: ProjectEditComponent;
  let fixture: ComponentFixture<ProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        ReactiveFormsModule
      ],
      declarations: [
        ProjectEditComponent,
        ProjectStatePickerComponent,
        ProjectComplexityPickerComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
