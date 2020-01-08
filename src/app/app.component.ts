import { Component, OnInit, OnDestroy } from '@angular/core';
import { TourDateService } from './core/services/tour-date.service';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public appTitle = 'navette';

  public tours: any[];

  public today: moment.Moment;
  public currentDay: moment.Moment;

  private subscriber: any;

  public constructor(
    private tourDateService: TourDateService
  ) {
    this.tours = new Array<any>();



  }

  public ngOnDestroy(): void {
    // Unsubscribe of all observables
    this.subscriber.unsubscribe();
  }

  public ngOnInit(): void {
    // Invoke service to get current currentDay
    this.subscriber = this.tourDateService.getUtcDate()
    .pipe(
      first()
    )
    .subscribe((result: any) => {
      this.today = moment(result.currentDateTime);

      this.currentDay = this.today.clone();

      this.tours.push(
        {
          hour: this.today.clone().hour(8).minute(0),
          availablePlaces: 8
        }
      );
      this.tours.push(
        {
          hour: this.today.clone().hour(11).minute(0),
          availablePlaces: 5
        }
      );
      this.tours.push(
        {
          hour: this.today.clone().hour(14).minute(0),
          availablePlaces: 3
        }
      );
      this.tours.push(
        {
          hour: this.today.clone().hour(17).minute(0),
          availablePlaces: 0
        }
      );
    });


  }

  public isSame(): boolean {
    return this.currentDay.isSame(this.today, 'd');
  }

  public increment(): void {
    const theDate: moment.Moment = this.currentDay.clone();

    this.currentDay = this.tourDateService.incrementDate(theDate);
  }

  public decrement(): void {
    const theDate: moment.Moment = this.currentDay.clone();

    this.currentDay = this.tourDateService.decrementDate(theDate, this.today);
  }
}
