import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizedtransactionPage } from './customizedtransaction.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizedtransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizedtransactionPageRoutingModule {}
