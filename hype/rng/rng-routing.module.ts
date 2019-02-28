import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RngLotteryComponent } from './rng-lottery/rng-lottery.component';

const routes: Routes = [
  {
    path:'',
    component: RngLotteryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RngRoutingModule { }
