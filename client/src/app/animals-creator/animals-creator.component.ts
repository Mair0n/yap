import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { AnimalsDataService } from '../services/animals-data.service';
import { Animal, Dependences } from '../types/animal';

import { FormBuilderService } from '../services/form-builder.service';

import { animals } from '../constants/form-controls';

@Component({
  selector: 'app-animals-creator',
  templateUrl: './animals-creator.component.html',
  styleUrls: ['./animals-creator.component.css']
})
export class AnimalsCreatorComponent implements OnInit {
  form: FormGroup;

  dependences: Dependences;

  constructor(
    private animalsDataService: AnimalsDataService,
    private fb: FormBuilderService,
    private location: Location,
  ) {
    this.animalsDataService.getAnimalDependences<Dependences>('animals/dependences').subscribe(dep => this.dependences = dep);
    this.form = this.fb.createForm(animals);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<Animal>('animals', this.form.value as Animal).subscribe(data => {
      this.location.back();
      console.log(data)
    });
  }
}
