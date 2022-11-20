import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidaPage } from './vida.page';

const routes: Routes = [
  {
    path: '',
    component: VidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidaPageRoutingModule {}
