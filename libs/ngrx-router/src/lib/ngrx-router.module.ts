import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CustomSerializer } from './+state/custom-serializer';
import { StoreModule } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { RouterEffects } from './+state/router.effetcs';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  providers: [RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]
  ],
})
export class NgrxRouterModule {}
