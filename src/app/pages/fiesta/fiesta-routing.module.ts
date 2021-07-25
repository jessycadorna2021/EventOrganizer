import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiestaPage } from './fiesta.page';

const routes: Routes = [
  {
    path: '',
    component: FiestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiestaPageRoutingModule {}
