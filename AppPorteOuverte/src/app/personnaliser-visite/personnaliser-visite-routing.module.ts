import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnaliserVisitePage } from './personnaliser-visite.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnaliserVisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnaliserVisitePageRoutingModule {}
