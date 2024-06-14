import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '../../../../core/interface/user.interface';
import { LogoutService } from '../../../../services/logout/logout.service';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';
import { MenuInfoInterface } from '../../../../core/interface/menu_info.interface';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarMenuComponent implements OnInit {
  menuItems: MenuInfoInterface[] = [];

  @Input() user: User = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
  }
}
