import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { RouteInfoRoutingModule, routedComponents } from './routeinfo-routing.module';

@NgModule({
    imports: [
        ThemeModule,
        RouteInfoRoutingModule,
    ],
    declarations: [
        ...routedComponents,
    ],
})
export class RouteInfoModule { }
