import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomizeregisterPage } from './customizeregister.page';

const routes: Routes = [
  {
    path: '',
    component: CustomizeregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizeregisterPageRoutingModule {}
