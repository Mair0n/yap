import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsDataService } from '../services/animals-data.service';
import { Feed } from '../types/feed';

@Component({
  selector: 'app-feed-creator',
  templateUrl: './feed-creator.component.html',
  styleUrls: ['./feed-creator.component.css']
})
export class FeedCreatorComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    kind: new FormControl(''),
    composition: new FormControl(''),
    number: new FormControl(''),
  });

  constructor(private animalsDataService: AnimalsDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsDataService.save<Feed>('feed', this.form.value as Feed).subscribe(data => console.log(data));
  }
}
