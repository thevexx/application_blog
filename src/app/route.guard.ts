import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  tokenUser = localStorage.getItem('usertoken');
  userId = jwt_decode(this.tokenUser).data.role;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( this.tokenUser) {
        return true;
      } else {
    this.router.navigateByUrl('/login');
    return false;
  }
  }
}
