import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenseignementPageRoutingModule } from './renseignement-routing.module';

import { RenseignementPage } from './renseignement.page';
import { ExpandableComponent } from "../components/expandable/expandable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenseignementPageRoutingModule
  ],
  declarations: [RenseignementPage, ExpandableComponent]
})
export class RenseignementPageModule {}
