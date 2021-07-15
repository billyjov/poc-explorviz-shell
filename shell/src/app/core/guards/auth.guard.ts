import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import { Observable } from 'rxjs';

import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.sessionService.hasTokenInStorage() && !this.sessionService.hasValidToken()) {
      this.router.navigate(['login']);
      return false;
    }

    const token = sessionStorage.getItem('accessToken') as string;
    const user = JSON.parse(sessionStorage.getItem('user') as string);
    this.sessionService.update(token, user);
    return true;
  }
}
