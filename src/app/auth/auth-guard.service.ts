import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        if (localStorage.getItem('app_uid')) {
            return true
        }
        this.router.navigate(['/auth/login']);
        return false
    }
    constructor(private af: AngularFireAuth, private router: Router) {
        // this.af.auth.subscribe((auth) => console.log(auth));
    }
}
