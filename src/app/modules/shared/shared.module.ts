import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoRecordsComponent } from './components/no-records/no-records.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkColorDirective } from './directives/mark-color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    BlockUiComponent,
    PageNotFoundComponent,
    NoRecordsComponent,
    MarkColorDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  exports: [
    BlockUiComponent,
    NoRecordsComponent,
    MarkColorDirective,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    
  ]
})
export class SharedModule { }
