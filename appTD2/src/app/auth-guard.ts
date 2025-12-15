import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Service } from './service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private serv: Service, private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }

  CanActivate(): boolean {
    if (this.serv.isConnected() == true) {
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }
}
