import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { Animal, Dependences } from '../types/animal';

@Component({
  selector: 'app-animals-creator',
  templateUrl: './animals-creator.component.html',
  styleUrls: ['./animals-creator.component.css']
})
export class AnimalsCreatorComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    class: new FormControl(''),
    type: new FormControl(''),
    feed: new FormControl(''),
  });

  dependences: Dependences;

  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalsDataService.getAnimalDependences<Dependences>('animals/dependences').subscribe(dep => this.dependences = dep);
  }

  onSubmit() {
    this.animalsDataService.save<Animal>('animals', this.form.value as Animal).subscribe(data => console.log(data));
  }
}
