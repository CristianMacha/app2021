import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control.value === matchingControl.value) {
      matchingControl.setErrors(null);
    } else {
      matchingControl.setErrors({ noesigual: true });
    }
  };
}
