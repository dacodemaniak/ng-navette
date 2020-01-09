import { TestBed } from '@angular/core/testing';

import { WsClockService } from './ws-clock.service';

describe('WsClockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsClockService = TestBed.get(WsClockService);
    expect(service).toBeTruthy();
  });
});
