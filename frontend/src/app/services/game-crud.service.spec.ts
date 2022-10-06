import { TestBed } from '@angular/core/testing';

import { GameCrudService } from './game-crud.service';

describe('GameCrudService', () => {
  let service: GameCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
