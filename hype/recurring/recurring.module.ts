import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecurringRoutingModule } from './recurring-routing.module';
import { RecurringLotteryComponent } from './recurring-lottery/recurring-lottery.component';

@NgModule({
  declarations: [RecurringLotteryComponent],
  imports: [
    CommonModule,
    RecurringRoutingModule
  ]
})
export class RecurringModule { }
