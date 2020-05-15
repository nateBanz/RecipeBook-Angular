import { TestBed } from '@angular/core/testing';

import { RbookService } from './rbook.service';

describe('RbookService', () => {
  let service: RbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
