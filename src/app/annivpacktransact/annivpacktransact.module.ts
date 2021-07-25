import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnivpacktransactPageRoutingModule } from './annivpacktransact-routing.module';

import { AnnivpacktransactPage } from './annivpacktransact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnivpacktransactPageRoutingModule
  ],
  declarations: [AnnivpacktransactPage]
})
export class AnnivpacktransactPageModule {}
