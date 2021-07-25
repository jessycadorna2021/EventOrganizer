import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicepackPageRoutingModule } from './servicepack-routing.module';

import { ServicepackPage } from './servicepack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicepackPageRoutingModule
  ],
  declarations: [ServicepackPage]
})
export class ServicepackPageModule {}
