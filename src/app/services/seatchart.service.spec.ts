import { TestBed } from '@angular/core/testing';

import { SeatchartService } from './seatchart.service';

describe('SeatchartService', () => {
  let service: SeatchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
