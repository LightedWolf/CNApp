import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(public router: Router, private cookies: CookieService) {}

  logout() {
    this.cookies.deleteAll();
    this.router.navigateByUrl('/login');
  }
}
