import { Component, OnInit, inject } from '@angular/core';
import { StudentActivityReportModel } from '../models/student-activity-report.model';
import { ReportService } from '../services/report.service';
import { ResponseResult } from '../../../core/models/response-result.model';

@Component({
  selector: 'matific-student-activity-report',
  templateUrl: './student-activity-report.component.html',
  styleUrl: './student-activity-report.component.scss'
})


export class StudentActivityReportComponent implements OnInit {

  isBlocked = false;
  activites: StudentActivityReportModel[] = [];

  reportService = inject(ReportService);

  ngOnInit(): void {
    this.getStudentActivites();
  }

  getStudentActivites() {
    this.isBlocked = true;
    this.reportService.getStudentActivities().subscribe({
      next: (activites: ResponseResult<StudentActivityReportModel[]>) => {
        this.isBlocked = false;
        console.log(activites);
      },
      error: (err) => {
        this.isBlocked = false;
        console.log(err);
      }
    });
  }
}
