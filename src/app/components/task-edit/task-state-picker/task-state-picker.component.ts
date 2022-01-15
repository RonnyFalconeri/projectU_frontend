import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-task-state-picker',
  templateUrl: './task-state-picker.component.html',
  styleUrls: ['./task-state-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TaskStatePickerComponent),
      multi: true
    }
  ]
})
export class TaskStatePickerComponent implements ControlValueAccessor {

  isTaskDone: boolean;
  originalState: boolean;

  constructor() {}

  changeIsTaskDone(isDone: boolean) {
    this.isTaskDone = isDone;
    this.propagateChange(isDone);
  }

  writeValue(isDone: boolean): void {
    this.isTaskDone = isDone;
    this.originalState = this.isTaskDone;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(): void {}

  propagateChange = (isDone: boolean) => {};

}
