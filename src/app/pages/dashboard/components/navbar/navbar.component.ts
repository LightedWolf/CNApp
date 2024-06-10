import { Component, Input } from '@angular/core';
import { User } from '../../../../core/interface/user.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() user: User = {
    email: '',
    password: '',
  };
}
