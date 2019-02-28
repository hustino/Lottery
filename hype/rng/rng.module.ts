import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RngRoutingModule } from './rng-routing.module';
import { RngLotteryComponent } from './rng-lottery/rng-lottery.component';

@NgModule({
  declarations: [RngLotteryComponent],
  imports: [
    CommonModule,
    RngRoutingModule
  ]
})
export class RngModule { }
