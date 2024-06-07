import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoRecordsComponent } from './components/no-records/no-records.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BlockUiComponent,
    PageNotFoundComponent,
    NoRecordsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
