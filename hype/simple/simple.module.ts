import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleLotteryComponent } from './simple-lottery/simple-lottery.component';

@NgModule({
  declarations: [SimpleLotteryComponent],
  imports: [
    CommonModule,
    SimpleRoutingModule
  ]
})
export class SimpleModule { }
