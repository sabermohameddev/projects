import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-role-change-modal',
  templateUrl: './role-change-modal.component.html',
  styleUrls: ['./role-change-modal.component.scss']
})
export class RoleChangeModalComponent implements OnInit {
  selectedRole!: string;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.selectedRole = this.config.data.currentRole;
  }

  confirm(): void {
    this.ref.close(this.selectedRole);
  }

  cancel(): void {
    this.ref.close(null);
  }
}
