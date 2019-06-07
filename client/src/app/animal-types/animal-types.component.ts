import { Component, OnInit } from '@angular/core';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalType } from './../types/animal-type';

@Component({
  selector: 'app-animal-types',
  templateUrl: './animal-types.component.html',
  styleUrls: ['./animal-types.component.css']
})
export class AnimalTypesComponent implements OnInit {
  private animalTypes: AnimalType[] = [];

  constructor(private animalDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalDataService.get<AnimalType>('types')
      .subscribe(AnimalTypees => this.animalTypes = AnimalTypees);
  }

  delete(name: string) {
    this.animalDataService.delete<AnimalType>('types', name)
      .subscribe(result => this.animalTypes = this.animalTypes.filter(x => x.name !== name));
  }
}
