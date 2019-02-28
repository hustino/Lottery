import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerballRoutingModule } from './powerball-routing.module';
import { PowerballLotteryComponent } from './powerball-lottery/powerball-lottery.component';

@NgModule({
  declarations: [PowerballLotteryComponent],
  imports: [
    CommonModule,
    PowerballRoutingModule
  ]
})
export class PowerballModule { }
