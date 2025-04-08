import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `Minimum ${errors['minlength'].requiredLength} characters`;

        case 'email':
          return 'Email format not valid';

        case 'pattern':
          return 'The password must have a Uppercase, lowercase letter and a number';


        default:
          return 'Error of validation not controlled';
      }
    }

    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  }
}
