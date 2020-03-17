import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenseignementPage } from './renseignement.page';

const routes: Routes = [
  {
    path: '',
    component: RenseignementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenseignementPageRoutingModule {}
