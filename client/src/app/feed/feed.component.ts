import { Component, OnInit } from '@angular/core';
import { AnimalsDataService } from '../services/animals-data.service';

import { Feed } from '../types/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private feeds: Feed[] = [];

  constructor(private animalDataService: AnimalsDataService) { }

  ngOnInit() {
    this.animalDataService.get<Feed>('feeds')
      .subscribe(feeds => this.feeds = feeds);
  }

  delete(name: string) {
    this.animalDataService.delete<Feed>('feeds', name)
      .subscribe(result => this.feeds = this.feeds.filter(x => x.name !== name));
  }
}
