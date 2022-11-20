import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratamePageRoutingModule } from './contratame-routing.module';

import { ContratamePage } from './contratame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratamePageRoutingModule
  ],
  declarations: [ContratamePage]
})
export class ContratamePageModule {}
