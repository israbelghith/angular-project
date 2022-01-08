import { TestBed } from '@angular/core/testing';

import { TypeInstrumentService } from './type-instrument.service';

describe('TypeInstrumentService', () => {
  let service: TypeInstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeInstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
