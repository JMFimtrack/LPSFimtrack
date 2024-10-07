import { Routes } from '@angular/router';

export const routes: Routes = [
  // Portfolio
  {
    path: '',
    title: 'LPSFimtrack',
    //canActivate: [authGuard, routeGuardSales],
    //canActivateChild: [routeGuardChildSales],
    loadComponent: () => import(
      './modules/portfolio/portfolio.component'
    ).then(c => c.PortfolioComponent),
  },
  // Campaigns
  {
    path: 'buen',
    //canActivate: [authGuard, routeGuardSales],
    //canActivateChild: [routeGuardChildSales],
    children: [
      {
        path: '',
        title: 'Fimtrak Buen Fin',
        loadComponent: () => import(
          './modules/buenfin/buenfin.component'
        ).then(c => c.BuenfinComponent),
      },
      {
        path: '2024',
        title: 'Fimtrak Buen Fin 2024',
        loadComponent: () => import(
          './modules/buenfin-2024/buenfin-2024.component'
        ).then(c => c.Buenfin2024Component)
      }
    ],
  },
  // Every
  //{ path: '**', pathMatch: 'full', redirectTo: '/error/404' },
];
