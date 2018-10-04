import { NgModule } from '@angular/core';

import { UserControlRoutingModule, routedComponents } from './user-control-routing.module';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  imports: [
    UserControlRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class UserControlModule {
}
