import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnniversariesPage } from './anniversaries.page';

const routes: Routes = [
  {
    path: '',
    component: AnniversariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnniversariesPageRoutingModule {}
