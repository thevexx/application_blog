import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ApiblogService } from './apiblog.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('ApiblogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiblogService],
      imports: [ HttpModule, RouterTestingModule ]
    });
  });

  it('should be created', inject([ApiblogService], (service: ApiblogService) => {
    expect(service).toBeTruthy();
  }));
});
