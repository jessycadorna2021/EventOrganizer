import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthpacktransactPage } from './birthpacktransact.page';

const routes: Routes = [
  {
    path: '',
    component: BirthpacktransactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthpacktransactPageRoutingModule {}
