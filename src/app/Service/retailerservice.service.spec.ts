import { TestBed } from '@angular/core/testing';

import { RetailerserviceService } from './retailerservice.service';

describe('RetailerserviceService', () => {
  let service: RetailerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
