import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function PasswordMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirm_password = control.get('confirmPassword');
    if (!password || !confirm_password) {
      return null;
    }
    if (confirm_password.errors && !confirm_password.errors['passwordMismatch']) {
      return null; // Other errors exist on confirmPassword, no need to re-evaluate passwordMismatch
    }
    if (password.value !== confirm_password.value) {
      confirm_password.setErrors({ passwordMismatch: true });
    } else {
      confirm_password.setErrors(null); // Clear any previous passwordMismatch error
    }
    return null;
  }
}
