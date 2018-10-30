import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbaraComponent } from './albara.component';

const routes: Routes = [
  {path: '',component: AlbaraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbaraRoutingModule { }
