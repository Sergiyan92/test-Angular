// custom-select.component.ts
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() control: FormControl | any = new FormControl();
  @Input() options: { value: string; label: string }[] = [];

  onChange: any = () => {};

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // implement if needed
  }

  setDisabledState(isDisabled: boolean): void {
    // implement if needed
  }

  // Додати метод для обробки події зміни значення у випадаючому списку
  handleSelectChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.onChange(selectedValue);
  }
}
