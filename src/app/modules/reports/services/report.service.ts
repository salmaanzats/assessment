import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseResult } from "../../../core/models/response-result.model";
import { BaseService } from "../../../core/services/base.service";
import { StudentActivityReportModel } from "../models/student-activity-report.model";
import { ClassModel } from "../models/class.model";


@Injectable({
    providedIn: 'root'
})
export class ReportService extends BaseService {

    constructor() {
        super();
    }

    getStudentActivities(): Observable<any> {
        return this.get<any>(`production/matific-test-activities`);
    }

    getClasses(): Observable<ClassModel[]> {
        return this.get<ClassModel[]>(`production/matific-test-classes`);
    }
}

