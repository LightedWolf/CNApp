import { Component, HostListener, Input } from '@angular/core';
import { User } from '../../../../core/interface/user.interface';
import { NgIf } from '@angular/common';
import { LogoutService } from '../../../../services/logout/logout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() user: User = {
    email: '',
    password: '',
  };
  constructor(public logoutService: LogoutService) {}
  logout() {
    this.logoutService.logout();
  }
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('#profile');
    if (!clickedInside) {
      this.closeDropdown();
    }
  }
  ngOnInit() {}
}
