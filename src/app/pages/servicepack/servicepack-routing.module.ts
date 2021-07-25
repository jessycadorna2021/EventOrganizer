import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicepackPage } from './servicepack.page';

const routes: Routes = [
  {
    path: '',
    component: ServicepackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicepackPageRoutingModule {}
