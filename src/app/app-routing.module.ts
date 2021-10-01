import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = 
[
  {path:"student",
  component:StudentComponent},
  {path:"teacher",
  component:TeacherComponent},
  {path:"dashboard",
  component:DashboardComponent},
  {path:"admin",
  component:AdminComponent},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
