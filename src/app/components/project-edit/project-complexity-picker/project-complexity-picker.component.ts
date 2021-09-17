import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Complexity } from 'build/openapi/model/complexity';

@Component({
  selector: 'app-project-complexity-picker',
  templateUrl: './project-complexity-picker.component.html',
  styleUrls: ['./project-complexity-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectComplexityPickerComponent),
      multi: true
    }
  ]
})
export class ProjectComplexityPickerComponent implements ControlValueAccessor {

  complexity: Complexity;
  complexityEnum = Complexity;

  constructor() {}

  changeComplexity(complexity: Complexity) {
    this.complexity = complexity;
    this.propagateChange(complexity);
  }

  writeValue(value: Complexity): void {
    this.complexity = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  propagateChange = (complexity: Complexity) => {};

}
