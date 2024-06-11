import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public loginService: LoginService, public router: Router) {}
  ngOnInit(): void {
    const token = this.loginService.getToken();
    const userId = this.loginService.getId();
    if (token && userId) {
      this.router.navigateByUrl('/home/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  async login() {
    const user = { email: this.email, password: this.password };
    try {
      const observable = this.loginService.login(user);
      const data = await firstValueFrom(observable);
      this.loginService.setToken(data.token);
      this.loginService.setId(data.usuario._id);
      this.router.navigateByUrl('/home/dashboard');
    } catch (error) {
      console.error(error);
    }
  }
}
