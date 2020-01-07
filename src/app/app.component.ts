import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle = 'navette';

  public tours: any[];

  public today: moment.Moment = moment();
  public currentDay: moment.Moment = this.today.clone();

  public constructor() {
    this.tours = new Array<any>();
  }

  public ngOnInit(): void {
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
  }

  public isSame(): boolean {
    return this.currentDay.isSame(this.today, 'd');
  }

  public increment(): void {
    const theDate: moment.Moment = this.currentDay.clone();
    theDate.add(1, 'd');

    this.currentDay = theDate;
  }

  public decrement(): void {
    const theDate: moment.Moment = this.currentDay.clone();
    theDate.subtract(1, 'd');

    this.currentDay = theDate;
  }
}
