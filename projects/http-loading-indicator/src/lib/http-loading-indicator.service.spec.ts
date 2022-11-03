import { TestBed } from '@angular/core/testing';

import { HttpLoadingIndicatorService } from './http-loading-indicator.service';

describe('HttpLoadingIndicatorService', () => {
  let service: HttpLoadingIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLoadingIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
