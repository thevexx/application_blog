import { TestBed, inject } from '@angular/core/testing';

import { ApiblogService } from './apiblog.service';

describe('ApiblogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiblogService]
    });
  });

  it('should be created', inject([ApiblogService], (service: ApiblogService) => {
    expect(service).toBeTruthy();
  }));
});
