import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './modules/layout/header-layout/header-layout.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';

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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
