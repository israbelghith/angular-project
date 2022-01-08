import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentGuard implements CanActivate {
  
  constructor (private authService: AuthService,
    private router : Router) {}

    
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
   console.log("inside can activate "+this.authService.roles);
   // -_- don't be soo smart and changed as soon as possible.. this '!'
    if (this.authService.isAdmin())
         return true;
    else
    {
         this.router.navigate(['app-forbidden']);
         return false;
    }
    
  
  }}
