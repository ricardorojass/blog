import { NgrxRouterModule } from '@blog/ngrx-router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './shared';
import { AboutComponent } from './components/about/about.component';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthModule } from './auth/auth.module';
import { NxModule } from '@nrwl/nx';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    AboutComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    HomeModule,
    AuthModule,
    NxModule.forRoot(),
    NgrxRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
