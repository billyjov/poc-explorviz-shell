import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceStepsDetailsComponent } from './trace-steps-details.component';

describe('TraceStepsDetailsComponent', () => {
  let component: TraceStepsDetailsComponent;
  let fixture: ComponentFixture<TraceStepsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceStepsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceStepsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
