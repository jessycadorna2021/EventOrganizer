import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReunionhpacktransactPage } from './reunionhpacktransact.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionhpacktransactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionhpacktransactPageRoutingModule {}
