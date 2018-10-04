import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteInfoComponent } from './routeinfo.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';

const routes: Routes = [{
    path: '',
    component: RouteInfoComponent,
    children: [{
        path: 'add-route',
        component: AddRouteComponent,
    },
        {
            path: 'edit-route',
            component: EditRouteComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RouteInfoRoutingModule { }

export const routedComponents = [
    RouteInfoComponent,
    AddRouteComponent,
    EditRouteComponent,
];
