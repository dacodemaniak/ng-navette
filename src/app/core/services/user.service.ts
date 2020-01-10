import { Injectable } from '@angular/core';

export interface IUser {
  login: string,
  password: string,
  isUp?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser;

  
  private readonly users: IUser[] = [
    {login: 'tototo', password: 'toto', isUp: false},
    {login: 'tititi', password: 'titi', isUp: false},
  ];

  constructor() {}

  public controlUser(user: IUser): boolean {
    console.log(`User passed : ${JSON.stringify(user)}`);
    
    let isAuthenticate: boolean = false;

    // Loop over users to find user
    this.users.forEach((storedUser: any) => {
      if (storedUser.login === user.login && storedUser.password === user.password) {
        // C'est bon, j'ai trouvé un user
        isAuthenticate = true;
        this.user = user;
        this.user.isUp = true;
      }
    });

    return isAuthenticate;
  }

  public isAuthenticated(): boolean {
    return this.user && this.user != null;
  }

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
