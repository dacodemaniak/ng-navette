import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TourDateService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUtcDate(): Observable<any> {
    return this.httpClient.get<any>(
      environment.worldClockApiRoot
    );
  }

  public incrementDate(currentDay: moment.Moment): moment.Moment {
    const theDate: moment.Moment = currentDay.clone().add(1, 'd');

    return this.check(theDate);
  }

  public decrementDate(currentDay: moment.Moment, today: moment.Moment): moment.Moment {
    const theDate: moment.Moment = currentDay.clone();

    return theDate.isSame(today, 'd') ? theDate : this.check(theDate.subtract(1, 'd'), false);
  }

  private check(date: moment.Moment, increment: boolean = true): moment.Moment {
    const dateToCheck: moment.Moment = date.clone();

    if (dateToCheck.isoWeekday() === 6 || dateToCheck.isoWeekday() === 7) {
      let offset: number = 8 - dateToCheck.isoWeekday();
      if (!increment) {
        offset = (offset + 1) * -1;
      }
      return dateToCheck.add(offset, 'd');
    }

    return dateToCheck;
  }
}
