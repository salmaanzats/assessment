export class StudentActivityReportModel {
    id: number;
    content: string;
    student: string;
    time: string;
    skill: string;
    type: "Activity";
    attempts: Attempt;
}

export class Attempt {
    weeks: Date[];
    values: number[];
}