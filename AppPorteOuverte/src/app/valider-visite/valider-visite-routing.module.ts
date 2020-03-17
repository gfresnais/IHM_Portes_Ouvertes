import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValiderVisitePage } from './valider-visite.page';

const routes: Routes = [
  {
    path: '',
    component: ValiderVisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValiderVisitePageRoutingModule {}
