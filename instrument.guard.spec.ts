import { TestBed } from '@angular/core/testing';

import { InstrumentGuard } from './instrument.guard';

describe('InstrumentGuard', () => {
  let guard: InstrumentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstrumentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
