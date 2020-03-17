import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixGuidePageRoutingModule } from './choix-guide-routing.module';

import { ChoixGuidePage } from './choix-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixGuidePageRoutingModule
  ],
  declarations: [ChoixGuidePage]
})
export class ChoixGuidePageModule {}
