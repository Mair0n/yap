import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalType } from './../types/animal-type';

@Component({
  selector: 'app-animal-type-creator',
  templateUrl: './animal-type-creator.component.html',
  styleUrls: ['./animal-type-creator.component.css']
})
export class AnimalTypeCreatorComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<AnimalType>('animal-type', this.form.value as AnimalType).subscribe(res => console.log(res));
  }
}
