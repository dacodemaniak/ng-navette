import { Component, OnInit } from '@angular/core';
import { TourDateService } from './../core/services/tour-date.service';
import { WsClockService } from './../core/services/ws-clock.service';

import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

import * as moment from 'moment';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  public tours: any[];

  public today: moment.Moment;
  public currentDay: moment.Moment;

  public constructor(
    private tourDateService: TourDateService,
    private clock: WsClockService
  ) {
    this.tours = new Array<any>();
  }


  public ngOnInit(): void {
    this.clock.receiveEvent().subscribe((message: any) => {
      console.log(message);
    });

    // Invoke service to get current currentDay
    this.tourDateService.getUtcDate()
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
