import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [AuthComponent],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule { }
