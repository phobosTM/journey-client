import { NgModule } from '@angular/core';

import { UserControlRoutingModule, routedComponents } from './user-control-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserControlService } from '../../@core/data/user-control.service';



@NgModule({
  imports: [
    UserControlRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserControlService,
  ],
})
export class UserControlModule {
}
