import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'task', component: TasksComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
