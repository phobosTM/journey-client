import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../../../@core/data/user-control.service';
@Component({
  selector: 'ngx-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class EditUserComponent implements OnInit {
  users: Array<any>;
  constructor(private userService: UserControlService) { }
  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Date',
        type: 'Date()',
      },
    },
  };
  // source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableService) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
