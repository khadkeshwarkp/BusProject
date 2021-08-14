import { TestBed } from '@angular/core/testing';

import { RouteCallService } from './route-call.service';

describe('RouteCallService', () => {
  let service: RouteCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
