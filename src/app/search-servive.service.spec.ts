import { TestBed } from '@angular/core/testing';

import { SearchServiveService } from './search-servive.service';

describe('SearchServiveService', () => {
  let service: SearchServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
