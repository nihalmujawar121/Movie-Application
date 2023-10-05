import { AbstractControl } from '@angular/forms';

export function phoneNoValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && control.value.length != 10) {
    return { ShouldBeGreaterthan9Digit: true };
  }
  return null;
}

