import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizedtransactionPageRoutingModule } from './customizedtransaction-routing.module';

import { CustomizedtransactionPage } from './customizedtransaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomizedtransactionPageRoutingModule
  ],
  declarations: [CustomizedtransactionPage]
})
export class CustomizedtransactionPageModule {}
