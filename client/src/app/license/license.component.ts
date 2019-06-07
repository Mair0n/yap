import { Component, OnInit } from '@angular/core';

import { AnimalsDataService } from '../services/animals-data.service';
import { License } from './../types/license';

@Component({
  selector: 'license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  private licencses: License[] = [];

  constructor(private animalDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalDataService.get<License>('licenses')
      .subscribe(licencses => this.licencses = licencses);
  }

  delete(name: string) {
    this.animalDataService.delete<License>('licenses', name)
      .subscribe(result => this.licencses = this.licencses.filter(x => x.name !== name));
  }
}
