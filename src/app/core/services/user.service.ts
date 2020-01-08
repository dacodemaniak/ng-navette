import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null;

  constructor() {}

  public getUser(): Promise<any> | any {
    if (this.user) {
      return this.user;
    }

    return new Promise<any>((resolve) => {
      const user: string = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
        resolve(this.user);
      } else {
        resolve(null);
      }
    });
  }

  public registerUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
}
