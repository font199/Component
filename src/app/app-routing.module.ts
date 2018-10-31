import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AlbaraComponent } from './albara/albara.component';

const routes: Routes = [
  {path: '', component: AlbaraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
