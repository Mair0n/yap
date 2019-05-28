import { Component, OnInit } from '@angular/core';
import { AnimalsDataService } from '../services/animals-data.service';

import { Animal } from '../types/animal';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  private animals: Animal[] = [];

  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalsDataService.get<Animal>('animals').subscribe(animals => this.animals = animals);
  }

  delete(name: string) {
    this.animalsDataService.delete<Animal>('animals', name)
      .subscribe(result => this.animals = this.animals.filter(x => x.name !== name));
  }
}
