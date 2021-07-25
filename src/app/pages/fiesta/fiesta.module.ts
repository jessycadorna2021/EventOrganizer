import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiestaPageRoutingModule } from './fiesta-routing.module';

import { FiestaPage } from './fiesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiestaPageRoutingModule
  ],
  declarations: [FiestaPage]
})
export class FiestaPageModule {}
