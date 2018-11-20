import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {path: '', component: SolicitudComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
