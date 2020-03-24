import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtelierCardPage } from './atelier-card.page';

const routes: Routes = [
  {
    path: '',
    component: AtelierCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtelierCardPageRoutingModule {}
