import { TestBed } from '@angular/core/testing';

import { EventBridgeService } from './event-bridge.service';

describe('EventBridgeService', () => {
  let service: EventBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
