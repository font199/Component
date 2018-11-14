import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AlbaraComponent } from './albara/albara.component';
import { LlistatComponent } from './llistat/llistat.component';

const routes: Routes = [
  {path: '', component: LlistatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
