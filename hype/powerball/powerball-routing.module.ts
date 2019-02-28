import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerballLotteryComponent } from './powerball-lottery/powerball-lottery.component';

const routes: Routes = [
  {
    path:'',
    component: PowerballLotteryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerballRoutingModule { }
