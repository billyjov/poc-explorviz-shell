import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceNavigationComponent } from './trace-navigation.component';

describe('TraceNavigationComponent', () => {
  let component: TraceNavigationComponent;
  let fixture: ComponentFixture<TraceNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
