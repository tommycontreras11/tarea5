import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentosPage } from './momentos.page';

const routes: Routes = [
  {
    path: '',
    component: MomentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentosPageRoutingModule {}
