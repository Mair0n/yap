import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { AnimalCard } from './../types/animal-card';

@Component({
  selector: 'app-animal-card-creator',
  templateUrl: './animal-card-creator.component.html',
  styleUrls: ['./animal-card-creator.component.css']
})
export class AnimalCardCreatorComponent implements OnInit {
  form: FormGroup = new FormGroup({
    animal: new FormControl(''),
    absolut: new FormControl(''),
    relative: new FormControl(''),
    expert: new FormControl(''),
  });
  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<AnimalCard>('animal-card', this.form.value as AnimalCard).subscribe(res => console.log(res));
  }
}
