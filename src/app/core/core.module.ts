import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ArticleService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    ArticleService,
  ],
  declarations: [],
})
export class CoreModule { }
