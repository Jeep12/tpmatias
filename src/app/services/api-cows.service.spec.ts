import { TestBed } from '@angular/core/testing';

import { ApiCowsService } from './api-cows.service';

describe('ApiCowsService', () => {
  let service: ApiCowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
