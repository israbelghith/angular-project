import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInstrumentComponent } from './add-type-instrument.component';

describe('AddTypeInstrumentComponent', () => {
  let component: AddTypeInstrumentComponent;
  let fixture: ComponentFixture<AddTypeInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeInstrumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
