import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingpacktransactPage } from './weddingpacktransact.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingpacktransactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingpacktransactPageRoutingModule {}
