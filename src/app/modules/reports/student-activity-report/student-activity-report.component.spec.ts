import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActivityReportComponent } from './student-activity-report.component';

describe('StudentActivityReportComponent', () => {
  let component: StudentActivityReportComponent;
  let fixture: ComponentFixture<StudentActivityReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentActivityReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentActivityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
