import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { License } from './../types/license';

@Component({
  selector: 'app-license-creator',
  templateUrl: './license-creator.component.html',
  styleUrls: ['./license-creator.component.css']
})
export class LicenseCreatorComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    animals: new FormControl(''),
    term: new FormControl(''),
  });
  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<License>('license', this.form.value as License).subscribe(res => console.log(res));
  }
}
