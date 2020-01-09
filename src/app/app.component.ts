import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appTitle = 'Navette';

  public constructor(private router: Router){}

  public goHome(): void {
    this.router.navigate(['home']);
  }
}
