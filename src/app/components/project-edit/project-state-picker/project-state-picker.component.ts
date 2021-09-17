import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State } from 'build/openapi/model/state';

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

  currentState: State;
  originalState: State;
  isDisabled: boolean = false;

  stateEnum = State;

  constructor() {}

  changeState(state: State) {
    if(this.isChangeAllowed(state)) {
      this.currentState = state;
      this.propagateChange(state);
    }
  }

  isChangeAllowed(state: State): boolean {
    if(!this.isDisabled) {
      if(this.originalState === State.Initiated ||
        state !== State.Initiated) {
        return true;
      }
    }
    return false;
  }

  writeValue(state: State): void {
    this.currentState = state;
    this.originalState = this.currentState;
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
