import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceReplayerMainComponent } from './trace-replayer-main.component';

describe('TraceReplayerMainComponent', () => {
  let component: TraceReplayerMainComponent;
  let fixture: ComponentFixture<TraceReplayerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraceReplayerMainComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceReplayerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
