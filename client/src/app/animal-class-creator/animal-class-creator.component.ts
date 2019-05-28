import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalClass } from './../types/animal-class';

@Component({
  selector: 'app-animal-class-creator',
  templateUrl: './animal-class-creator.component.html',
  styleUrls: ['./animal-class-creator.component.css']
})
export class AnimalClassCreatorComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<AnimalClass>('animal-class', this.form.value as AnimalClass).subscribe(res => console.log(res));
  }
}
