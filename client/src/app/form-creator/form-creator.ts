import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AnimalsDataService } from '../services/animals-data.service';

import { FormBuilderService } from '../services/form-builder.service';

import {  controls } from '../constants/form-controls';
import { paths } from '../constants/router-paths';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {
  form: FormGroup;
  arrayForm: string[] = [];
  path: string;

  constructor(
    private router: Router,
    private location: Location,
    private animalsDataService: AnimalsDataService,
    private fb: FormBuilderService,
  ) { 

  }

  ngOnInit() {
    this.path = paths.filter(x => this.router.url.indexOf(x) > -1)[0];
    this.form = this.fb.createForm(controls[this.path]);
    for(const control in this.form.controls) {
      this.arrayForm.push(control);
    }
  }

  onSubmit() {
    this.animalsDataService.save(this.path, this.form.value).subscribe(res => {
      console.log(res)
      this.location.back();
    });
  }
}
