import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './modules/layout/header-layout/header-layout.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'student-activity-report',
        pathMatch: 'full'
      },
      {
        path: 'student-activity-report',
        loadChildren: () => import('./modules/reports/reports.module').then(t => t.ReportsModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
