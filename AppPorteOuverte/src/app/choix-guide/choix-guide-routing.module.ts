import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixGuidePage } from './choix-guide.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixGuidePageRoutingModule {}
