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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    UserRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
