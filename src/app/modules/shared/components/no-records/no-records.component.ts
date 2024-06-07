import { Component, Input } from '@angular/core';

@Component({
  selector: 'matific-no-records',
  templateUrl: './no-records.component.html',
  styleUrl: './no-records.component.scss'
})
export class NoRecordsComponent {
  @Input() items: any[] | undefined;
}
