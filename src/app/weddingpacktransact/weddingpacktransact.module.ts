import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingpacktransactPageRoutingModule } from './weddingpacktransact-routing.module';

import { WeddingpacktransactPage } from './weddingpacktransact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingpacktransactPageRoutingModule
  ],
  declarations: [WeddingpacktransactPage]
})
export class WeddingpacktransactPageModule {}
