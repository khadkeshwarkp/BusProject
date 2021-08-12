import { TestBed } from '@angular/core/testing';

import { SchedulecallService } from './schedulecall.service';

describe('SchedulecallService', () => {
  let service: SchedulecallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulecallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
