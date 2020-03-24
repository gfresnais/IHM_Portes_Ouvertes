import { Component, OnInit } from '@angular/core';
import { AtelierCard } from './Atelier-Card';

@Component({
  selector: 'app-personnaliser-visite',
    templateUrl: './personnaliser-visite.page.html',
  styleUrls: ['./personnaliser-visite.page.scss'],
})
export class PersonnaliserVisitePage implements OnInit {
  TabAtelier: AtelierCard[];


  constructor() {}

  ngOnInit() {
  }

  addVisit(numAtelier : int) {
    

}
