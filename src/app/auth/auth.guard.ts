import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth_service: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth_service.user_auth();
  }
  
}
