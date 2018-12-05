import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
   token = localStorage.getItem('usertoken');
 userRole = jwt_decode(this.token).data.role;
 constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.userRole === 'admin') {
        console.log('role guard', this.userRole);
return true;
      } else {
        alert('access denided');
        this.router.navigateByUrl('/home');
        return false;
      }
  }
}
