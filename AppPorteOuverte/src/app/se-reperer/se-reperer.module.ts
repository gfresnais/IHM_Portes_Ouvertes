import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeRepererPageRoutingModule } from './se-reperer-routing.module';

import { SeRepererPage } from './se-reperer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeRepererPageRoutingModule
  ],
  declarations: [SeRepererPage]
})
export class SeRepererPageModule {}
