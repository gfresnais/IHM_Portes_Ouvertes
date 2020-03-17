import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValiderVisitePageRoutingModule } from './valider-visite-routing.module';

import { ValiderVisitePage } from './valider-visite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValiderVisitePageRoutingModule
  ],
  declarations: [ValiderVisitePage]
})
export class ValiderVisitePageModule {}
