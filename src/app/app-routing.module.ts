import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { NotifyComponent } from './notify/notify.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthguardService } from './provider/auth-guard/authguard.service';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardService],
  },
  { path: 'admin', component: AdminComponent },
  { path: 'forms', component: FormExampleComponent },
  { path: 'notify', component: NotifyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user', component: UserComponent },
  { path: 'posts', component: PostsComponent },

  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthguardService],
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
