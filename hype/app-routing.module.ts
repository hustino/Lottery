import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path:'simple',
  loadChildren:'simple/simple.module#SimpleModule'
},
{
  path:'recurring',
  loadChildren:'recurring/recurring.module#RecurringModule'
},
{
  path:'rng',
  loadChildren:'rng/rng.module#RngModule'
},
{
  path:'powerball',
  loadChildren:'powerball/powerball.module#PowerballModule'
},
{
  path:'',
  redirectTo:'',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
