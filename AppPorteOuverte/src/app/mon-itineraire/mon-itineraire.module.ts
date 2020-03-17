import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonItinerairePageRoutingModule } from './mon-itineraire-routing.module';

import { MonItinerairePage } from './mon-itineraire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonItinerairePageRoutingModule
  ],
  declarations: [MonItinerairePage]
})
export class MonItinerairePageModule {}
