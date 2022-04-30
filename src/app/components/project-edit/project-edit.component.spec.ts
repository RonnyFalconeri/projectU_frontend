import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Complexity, Project, State } from 'build/openapi';
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
        ReactiveFormsModule,
        FormsModule
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

  it('should not allow empty title', () => {
    getFormWithEmptyTitle(component.projectForm);
    fixture.detectChanges();
    expect(component.projectForm.valid).toBeFalsy();
  });

  it('should not allow title longer than 100 chars', () => {
    getFormWithLongTitle(component.projectForm);
    fixture.detectChanges();
    expect(component.projectForm.valid).toBeFalsy();
  });

  xit('should not be valid to change state to INITIATED of a project already in progress', () => {

  });
});

function getFormWithEmptyTitle(form: FormGroup): void {
  form.get('title')?.setValue('');
  form.get('description')?.setValue('qwer');
  form.get('estimatedDurationInHours')?.setValue(0);
  form.get('state')?.setValue(State.Initiated);
  form.get('complexity')?.setValue(Complexity.Medium);
}

function getFormWithLongTitle(form: FormGroup): void {
  form.get('title')?.setValue('qweporiquwpeoriquweporiquweporiquweporiqwueproiqweuproqiweurpqowieruqpwoeiroowowowierupqwoeiruqpwoeiqwer');
  form.get('description')?.setValue('qwer');
  form.get('estimatedDurationInHours')?.setValue(0);
  form.get('state')?.setValue(State.Initiated);
  form.get('complexity')?.setValue(Complexity.Medium);
}

function getValidForm(): Project {
  return {
    id: '',
    title: 'validform',
    description: 'description',
    tasks: [],
    state: State.Initiated,
    complexity: Complexity.Easy,
    estimatedDurationInHours: 0,
    createdAt: 1649693507720,
    expectedResult: '',
    startedAt: '',
    finishedAt: '',
    actualResult: ''
  }
}

