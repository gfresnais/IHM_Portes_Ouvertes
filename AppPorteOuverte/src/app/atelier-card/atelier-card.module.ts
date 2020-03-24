import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtelierCardPageRoutingModule } from './atelier-card-routing.module';

import { AtelierCardPage } from './atelier-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtelierCardPageRoutingModule
  ],
  declarations: [AtelierCardPage]
})
export class AtelierCardPageModule {}
