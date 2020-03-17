import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeRepererPage } from './se-reperer.page';

const routes: Routes = [
  {
    path: '',
    component: SeRepererPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeRepererPageRoutingModule {}
