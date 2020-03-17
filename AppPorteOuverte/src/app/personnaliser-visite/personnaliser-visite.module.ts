import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnaliserVisitePageRoutingModule } from './personnaliser-visite-routing.module';

import { PersonnaliserVisitePage } from './personnaliser-visite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnaliserVisitePageRoutingModule
  ],
  declarations: [PersonnaliserVisitePage]
})
export class PersonnaliserVisitePageModule {}
