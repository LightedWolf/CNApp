import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../core/interface/user.interface';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [SidebarMenuComponent, NavbarComponent, RouterOutlet],
})
export class DashboardComponent {
  constructor(public loginService: LoginService, public router: Router) {}

  ngOnInit(): void {
    const token = this.loginService.getToken();
    const userId = this.loginService.getId();
    if (token && userId) {
      this.router.navigateByUrl('/home/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
    this.getUserLogged();
  }
  user: User = {
    email: '',
    password: '',
  };
  getUserLogged() {
    const id = this.loginService.getId();
    const token = this.loginService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-token': token,
    });
    this.loginService.getUser(id, header).subscribe((response) => {
      this.user = response.user;
    });
  }
}
// En el momento en el que quieras hacer logout simplemente tienes
// que borrar las cookies haciendo:
// this.cookies.delete("token");
// this.cookies.delete("id");
