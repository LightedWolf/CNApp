import { PATH } from '../../../core/enum/path.enum';
import { MenuInfoInterface } from '../../../core/interface/menu_info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.DASHBOARD,
    title: 'Home',
    icon: 'home',
    classCss: '',
  },
  {
    path: PATH.COSTUMERS,
    title: 'Costumers',
    submenu: [
      {
        path: PATH.PROYECTS,
        title: 'Proyects',
      },
    ],
  },
  {
    path: PATH.SALES,
    title: 'Sales',
  },
  {
    path: PATH.TEAMS,
    title: 'Teams',
    submenu: [
      {
        path: PATH.COLABORATORS,
        title: 'Colaborators',
      },
    ],
  },
];
