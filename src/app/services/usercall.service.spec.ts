import { TestBed } from '@angular/core/testing';

import { UsercallService } from './usercall.service';

describe('UsercallService', () => {
  let service: UsercallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
