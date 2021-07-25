import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomizeregisterPageRoutingModule } from './customizeregister-routing.module';

import { CustomizeregisterPage } from './customizeregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomizeregisterPageRoutingModule
  ],
  declarations: [CustomizeregisterPage]
})
export class CustomizeregisterPageModule {}
