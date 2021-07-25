import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReunionhpacktransactPageRoutingModule } from './reunionhpacktransact-routing.module';

import { ReunionhpacktransactPage } from './reunionhpacktransact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReunionhpacktransactPageRoutingModule
  ],
  declarations: [ReunionhpacktransactPage]
})
export class ReunionhpacktransactPageModule {}
