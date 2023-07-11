import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { UserRoutingModule } from './user/user-routing.module';
import { MaterialModule } from 'src/material.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ConfirmationDialogComponent } from './admin/user-management/confirmation-dialog/confirmation-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoleChangeModalComponent } from './admin/user-management/role-change-modal/role-change-modal.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { ProfileContentComponent } from './admin/profile-content/profile-content.component';
import { NewsComponent } from './admin/news/news.component';
import { UsersidebarComponent } from './user/usersidebar/usersidebar.component';
import { TasksComponent } from './user/tasks/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserManagementComponent,
    ConfirmationDialogComponent,
    RoleChangeModalComponent,
    SidebarComponent,
    ProfileComponent,
    ProfileContentComponent,
    NewsComponent,
    UsersidebarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
    
    providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
