import { TestBed } from '@angular/core/testing';

import { ApiIpService } from './api-ip.service';

describe('ApiIpService', () => {
  let service: ApiIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
