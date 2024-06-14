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
        path: PATH.PROJECTS,
        title: 'Projects',
      },
    ],
  },
  {
    path: PATH.FINANCE,
    title: 'Finance',
    submenu: [
      {
        path: PATH.REPORTS,
        title: 'Reports',
      },
    ],
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
