import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnniversariesPageRoutingModule } from './anniversaries-routing.module';

import { AnniversariesPage } from './anniversaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnniversariesPageRoutingModule
  ],
  declarations: [AnniversariesPage]
})
export class AnniversariesPageModule {}
