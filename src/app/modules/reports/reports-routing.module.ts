import { RouterModule, Routes } from "@angular/router";
import { StudentActivityReportComponent } from "./student-activity-report/student-activity-report.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: StudentActivityReportComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }