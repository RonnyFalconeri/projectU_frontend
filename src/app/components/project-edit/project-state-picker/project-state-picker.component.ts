import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State } from 'src/app/shared/models/State';

@Component({
  selector: 'app-project-state-picker',
  templateUrl: './project-state-picker.component.html',
  styleUrls: ['./project-state-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectStatePickerComponent),
      multi: true
    }
  ]
})
export class ProjectStatePickerComponent implements ControlValueAccessor  {

  state: State;
  stateEnum = State;

  constructor() {}

  changeSize(state: State) {
    this.state = state;
    this.propagateChange(state);
  }

  writeValue(value: State): void {
    this.state = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  propagateChange = (state: State) => {};

}
