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

  isDisabled: boolean = false;
  state: State;
  stateEnum = State;

  constructor() {}

  changeState(state: State) {
    if(!this.isDisabled) {
      if(state !== State.INITIATED) {
        this.state = state;
        this.propagateChange(state);
      }
    }
  }

  writeValue(state: State): void {
    this.state = state;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  propagateChange = (state: State) => {};

}
