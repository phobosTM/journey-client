import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserControlComponent } from './user-control.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [{
  path: '',
  component: UserControlComponent,
  children: [{
    path: 'add-user',
    component: AddUserComponent,
  }, {
    path: 'edit-user',
    component: EditUserComponent,
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserControlRoutingModule {
}

export const routedComponents = [
    UserControlComponent,
    AddUserComponent,
    EditUserComponent,
];
