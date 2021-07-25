import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthpacktransactPageRoutingModule } from './birthpacktransact-routing.module';

import { BirthpacktransactPage } from './birthpacktransact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthpacktransactPageRoutingModule
  ],
  declarations: [BirthpacktransactPage]
})
export class BirthpacktransactPageModule {}
