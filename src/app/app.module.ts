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
import { ArticleModule } from './article/article.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    HomeModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
