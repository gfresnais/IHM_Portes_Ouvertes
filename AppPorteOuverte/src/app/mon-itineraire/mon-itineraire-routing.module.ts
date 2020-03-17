import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonItinerairePage } from './mon-itineraire.page';

const routes: Routes = [
  {
    path: '',
    component: MonItinerairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonItinerairePageRoutingModule {}
