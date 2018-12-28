import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteGuard } from './route.guard';
import { HttpModule } from '@angular/http';
describe('RouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuard],
      imports: [ HttpModule, RouterTestingModule ]

    });
  });

  it('should ...', inject([RouteGuard], (guard: RouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
