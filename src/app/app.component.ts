import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CN17App';
  constructor(public router: Router, public loginService: LoginService) {}
  ngOnInit(): void {
    const token = this.loginService.getToken();
    const userId = this.loginService.getId();
    if (token && userId) {
      this.router.navigateByUrl('/home/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
