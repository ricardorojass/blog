import { NgrxRouterModule } from '@blog/ngrx-router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
import { environment } from '../environments/environment.prod';

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
    StoreModule.forRoot({}, { metaReducers: !environment.production ? [storeFreeze] : [] }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
