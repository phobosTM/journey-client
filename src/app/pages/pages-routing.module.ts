import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
<<<<<<< HEAD
  },  {
=======
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
      path: 'routeinfo',
      loadChildren: './routeinfo/routeinfo.module#RouteInfoModule',
  }, {
>>>>>>> c7807e12f592d3f1f44bf7aae2b7c531446589dd
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: 'user-control',
    loadChildren: './user-control/user-control.module#UserControlModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
    {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
