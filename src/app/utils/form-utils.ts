import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {
  static passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$';
  static slugPattern = '^[a-z0-9_]+(?:-[a-z0-9_]+)*$';

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
          if (errors['pattern'].requiredPattern === FormUtils.passwordPattern)
            return 'The password must have a Uppercase, lowercase letter and a number';

          if (errors['pattern'].requiredPattern === FormUtils.slugPattern)
            return 'The slug cannot contain spaces';

          return 'Pattern error with regex';

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
