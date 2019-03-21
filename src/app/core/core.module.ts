import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ArticleService, JwtService, UserService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    ArticleService,
    UserService,
    JwtService,
  ],
  declarations: [],
})
export class CoreModule { }
