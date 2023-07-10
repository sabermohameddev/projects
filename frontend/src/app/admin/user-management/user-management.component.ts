import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { User } from 'src/app/models/user.model';
import { RoleChangeModalComponent } from './role-change-modal/role-change-modal.component';
import { Role } from 'src/app/models/role.enum';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users!: User[];
  totalRecords!: number;
  loading!: boolean;
  ref!: DynamicDialogRef;

  constructor(
    private userService: UserService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getAllUsers()
      .subscribe(
        users => {
          this.users = users;
          this.totalRecords = users.length;
          this.loading = false;
        },
        error => {
          console.error('An error occurred:', error);
          this.loading = false;
        }
      );
  }

  showConfirmation(user: User): void {
    this.ref = this.dialogService.open(ConfirmationDialogComponent, {
      width: '500px',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: {
        user: user,
        action: user.isActive ? 'Deactivate' : 'Activate'
      }
    });

    this.ref.onClose.subscribe((result: boolean) => {
      if (result) {
        this.toggleActivation(user);
      }
    });
  }

  toggleActivation(user: User): void {
    user.isActive = !user.isActive;
    this.userService.updateUser(user.id, user).subscribe(
      updatedUser => {
        const index = this.users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }

  showRoleChangeModal(user: User): void {
    const roles = ['Admin', 'Manager', 'User'];
    this.ref = this.dialogService.open(RoleChangeModalComponent, {
      header: 'Change Role',
      width: '450px',
      height: '320px',
      contentStyle: { 'max-height': '350px', 'overflow': 'auto' },
      baseZIndex: 10000,
      data: {
        currentRole: user.role,
        roles: roles
      }
    });

    this.ref.onClose.subscribe((selectedRole: Role) => {
      if (selectedRole) {
        this.changeUserRole(user, selectedRole);
      }
    });
  }

  changeUserRole(user: User, newRole: Role): void {
    user.role = newRole;
    this.userService.updateUser(user.id, user).subscribe(
      updatedUser => {
        const index = this.users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }
}
