import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceOverviewHostComponent } from './trace-overview-host.component';

describe('TraceOverviewHostComponent', () => {
  let component: TraceOverviewHostComponent;
  let fixture: ComponentFixture<TraceOverviewHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceOverviewHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceOverviewHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
