import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagetransactionsPageRoutingModule } from './packagetransactions-routing.module';

import { PackagetransactionsPage } from './packagetransactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagetransactionsPageRoutingModule
  ],
  declarations: [PackagetransactionsPage]
})
export class PackagetransactionsPageModule {}
