import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecurringLotteryComponent } from './recurring-lottery/recurring-lottery.component';

const routes: Routes = [
  {
    path:'',
    component: RecurringLotteryComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecurringRoutingModule { }
