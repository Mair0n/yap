import { Component, OnInit } from '@angular/core';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalClass } from './../types/animal-class';

@Component({
  selector: 'app-animal-classes',
  templateUrl: './animal-classes.component.html',
  styleUrls: ['./animal-classes.component.css']
})
export class AnimalClassesComponent implements OnInit {
  private animalClasses: AnimalClass[] = [];

  constructor(private animalDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalDataService.get<AnimalClass>('animal-class')
      .subscribe(animalClasses => this.animalClasses = animalClasses);
  }

  delete(name: string) {
    this.animalDataService.delete<AnimalClass>('animal-class', name)
      .subscribe(result => this.animalClasses = this.animalClasses.filter(x => x.name !== name));
  }
}
