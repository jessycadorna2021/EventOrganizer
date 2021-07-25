import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnivpacktransactPage } from './annivpacktransact.page';

const routes: Routes = [
  {
    path: '',
    component: AnnivpacktransactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnivpacktransactPageRoutingModule {}
