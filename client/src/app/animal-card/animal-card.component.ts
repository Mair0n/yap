import { Component, OnInit } from '@angular/core';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalCard } from './../types/animal-card';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {
  private animalCards: AnimalCard[] = [];

  constructor(private animalDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalDataService.get<AnimalCard>('cards')
      .subscribe(animalCards => this.animalCards = animalCards);
  }

  delete(animal: string) {
    this.animalDataService.delete<AnimalCard>('cards', animal)
      .subscribe(result => this.animalCards = this.animalCards.filter(x => x.animal !== animal));
  }
}
