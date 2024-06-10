import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PATH } from './core/enum/path.enum';
import { TeamsComponent } from './pages/dashboard/components/teams/teams.component';
import { ColaboratorsComponent } from './pages/dashboard/components/colaborators/colaborators.component';
import { SalesComponent } from './pages/dashboard/components/sales/sales.component';
import { DashboardChildComponent } from './pages/dashboard/components/dashboard-child/dashboard-child.component';
import { CostumersComponent } from './pages/dashboard/components/costumers/costumers.component';
import { ProyectsComponent } from './pages/dashboard/components/proyects/proyects.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    title: 'Home',
    component: DashboardComponent,
    children: [
      {
        path: PATH.DASHBOARD,
        title: 'Home',
        component: DashboardChildComponent,
      },
      {
        path: PATH.TEAMS,
        title: 'Teams',
        component: TeamsComponent,
      },
      {
        path: PATH.COLABORATORS,
        title: 'Colaborators',
        component: ColaboratorsComponent,
      },
      {
        path: PATH.SALES,
        title: 'Sales',
        component: SalesComponent,
      },
      {
        path: PATH.COSTUMERS,
        title: 'Costumers',
        component: CostumersComponent,
      },
      {
        path: PATH.PROYECTS,
        title: 'Proyects',
        component: ProyectsComponent,
      },
    ],
  },
];
