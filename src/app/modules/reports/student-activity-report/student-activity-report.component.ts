import { Component, OnInit, inject } from '@angular/core';
import { StudentActivityReportModel } from '../models/student-activity-report.model';
import { ReportService } from '../services/report.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ClassModel } from '../models/class.model';
import { ActivityFilterModel } from '../models/activity-filter.model';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'matific-student-activity-report',
  templateUrl: './student-activity-report.component.html',
  styleUrl: './student-activity-report.component.scss',
  providers: [provideNativeDateAdapter()],
})


export class StudentActivityReportComponent implements OnInit {

  isBlocked = false;
  activites: StudentActivityReportModel[] = [];
  filteredActivities: StudentActivityReportModel[] = [];
  classes: ClassModel[] = [];
  students: string[] = [];

  filterModel: ActivityFilterModel = new ActivityFilterModel();

  reportService = inject(ReportService);

  ngOnInit(): void {
    this.getInit();
  }

  getInit() {
    this.isBlocked = true;

    let getClasses = this.reportService.getClasses();
    let getStudentActivites = this.reportService.getStudentActivities();

    forkJoin([getClasses, getStudentActivites]).subscribe(([classes, activities]) => {
      this.activites = JSON.parse(activities.body);
      this.filteredActivities = structuredClone(this.activites);
      this.classes = classes;

      this.classes.forEach(element => {
        this.students = [...element.students, ...this.students]
      });

      this.students.sort((a, b) => a.localeCompare(b));

      this.isBlocked = false;
    }, error => {
      this.isBlocked = false;
      console.log(error);
    });
  }

  getStudents(event: any) {
    let selectedClass = event.target.value;
    this.filterModel.selectedStudent = '';

    if (selectedClass != '')
      this.students = this.classes.find(p => p.id == selectedClass)?.students!;

    this.filter();
  }

  filter() {
    this.filteredActivities = structuredClone(this.activites);

    if (this.filterModel.selectedClass != '')
      this.filteredActivities = this.filteredActivities.filter(p => this.students.includes(p.student));

    if (this.filterModel.selectedStudent != '')
      this.filteredActivities = this.filteredActivities.filter(p => p.student == this.filterModel.selectedStudent);


    if (this.filterModel.fromDate != null && this.filterModel.toDate != null) {
      let fromDate = new Date(this.filterModel.fromDate).getTime();
      let toDate = new Date(this.filterModel.toDate).getTime();

      this.filteredActivities.forEach(act => {
        return act.attempts.weeks = act.attempts.weeks.filter(p => {
          let time = new Date(p).getTime();
          return (fromDate < time && toDate > time)
        })
      })
    }
  }

  clearDates() {
    this.filterModel.fromDate = null;
    this.filterModel.toDate = null;
    this.filter();
  }
}
