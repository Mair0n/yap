import { TestBed } from '@angular/core/testing';

import { AnimalsService } from './animals-data.service';

describe('AnimalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalsService = TestBed.get(AnimalsService);
    expect(service).toBeTruthy();
  });
});
