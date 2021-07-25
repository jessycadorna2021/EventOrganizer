import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiestarecPageRoutingModule } from './fiestarec-routing.module';

import { FiestarecPage } from './fiestarec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiestarecPageRoutingModule
  ],
  declarations: [FiestarecPage]
})
export class FiestarecPageModule {}
