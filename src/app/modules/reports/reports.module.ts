import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentActivityReportComponent } from './student-activity-report/student-activity-report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StudentActivityReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
