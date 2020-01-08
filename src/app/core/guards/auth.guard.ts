import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const service: any = this.userService.getUser();

      if (service instanceof Promise) {
        return service.then((user) => {
          if (user) {
            return true;
          }
        });
      } else {
        if (service) {
          return true;
        }
      }

      this.router.navigate(['login']);

      return false;
  }

}
