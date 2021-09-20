import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Complexity, State } from 'build/openapi';
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

  it('should have state INITIATED when creating new project', () => {
    component.editExistingProject = false;
    fixture.detectChanges();
    expect(component.projectForm.get('state')?.value).toEqual(State.Initiated);
  });

  it('should not be valid to change state when creating new project', () => {
    /*
    component.editExistingProject = false;
    getValidForm(component.projectForm);
    fixture.detectChanges();
    component.projectForm.get('state')?.setValue(State.Halted);
    fixture.detectChanges();
    console.log(component.projectForm.value);
    expect(component.projectForm.valid).toBeFalsy();
    */
  });

  it('should not be able to change state back to INITIATED when project is already in progress', () => {});

  it('should be able to change to every state when INITIATED', () => {});
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

function getValidForm(form: FormGroup): void {
  form.get('title')?.setValue('qwer');
  form.get('description')?.setValue('qwer');
  form.get('estimatedDurationInHours')?.setValue(0);
  form.get('state')?.setValue(State.Initiated);
  form.get('complexity')?.setValue(Complexity.Medium);
}

