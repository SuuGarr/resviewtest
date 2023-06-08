import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private validationErrors: string[] = [];

  setValidationErrors(errors: string[]) {
    this.validationErrors = errors;
  }

  getValidationErrors(): string[] {
    const errors = [...this.validationErrors];
    this.clearValidationErrors();
    return errors;
  }

  clearValidationErrors() {
    this.validationErrors = [];
  }
}
