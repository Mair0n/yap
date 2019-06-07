import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(public fb: FormBuilder) { }

  createForm(controls) {
    return this.fb.group(controls);
  }
}
