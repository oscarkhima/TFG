import { TestBed } from '@angular/core/testing';

import { DishAndCardsService } from './dish-and-cards.service';

describe('DishAndCardsService', () => {
  let service: DishAndCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishAndCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
