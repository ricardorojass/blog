import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, ArticleService, JwtService, UserService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ArticleService,
    UserService,
    JwtService,
  ],
  declarations: [],
})
export class CoreModule { }
