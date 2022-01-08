import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInstrumentsComponent } from './type-instruments.component';

describe('TypeInstrumentsComponent', () => {
  let component: TypeInstrumentsComponent;
  let fixture: ComponentFixture<TypeInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
