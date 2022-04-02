import { TestBed } from '@angular/core/testing';

import { ApiAboutService } from './api-about.service';

describe('ApiAboutService', () => {
  let service: ApiAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
