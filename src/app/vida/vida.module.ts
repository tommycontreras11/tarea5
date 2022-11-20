import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidaPageRoutingModule } from './vida-routing.module';

import { VidaPage } from './vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidaPageRoutingModule
  ],
  declarations: [VidaPage]
})
export class VidaPageModule {}
