import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { NewProjectComponent } from '../project/new-project/new-project.component';
import { MenuItem } from 'primeng/api';







@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.scss']
})

export class UsersidebarComponent {
  
  constructor(private dialogService: DialogService) { }

  isSubMenuOpen = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  openNewProjectDialog() {
    const ref = this.dialogService.open(NewProjectComponent, {
      header: 'New Project',
      width: '70%',
    });
  }
  
  

}