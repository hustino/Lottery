import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLotteryComponent } from './simple-lottery/simple-lottery.component';

const routes: Routes = [
  {
    path:'',
    component: SimpleLotteryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleRoutingModule { }
