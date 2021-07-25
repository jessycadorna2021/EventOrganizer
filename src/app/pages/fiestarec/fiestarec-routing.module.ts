import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiestarecPage } from './fiestarec.page';

const routes: Routes = [
  {
    path: '',
    component: FiestarecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiestarecPageRoutingModule {}
