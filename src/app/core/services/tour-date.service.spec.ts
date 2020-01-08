import { TestBed } from '@angular/core/testing';

import { TourDateService } from './tour-date.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('TourDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: TourDateService = TestBed.get(TourDateService);
    expect(service).toBeTruthy();
  });
});
