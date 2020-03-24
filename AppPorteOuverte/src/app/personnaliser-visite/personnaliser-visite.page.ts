import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnaliser-visite',
    templateUrl: './personnaliser-visite.page.html',
  styleUrls: ['./personnaliser-visite.page.scss'],
})
export class PersonnaliserVisitePage implements OnInit {
   tabAtelier: AtelierCard[]; 
  //  = [{
  //   title: "Atelier 1",
  //   emp: "1er étage",
  //   desc: "Présentation des projets de réalité virtuelle"
  // },
  // {
  //   title: "Atelier 2",
  //   emp: "Rez-de-chaussée",
  //   desc: "Présentation de l’école et du protocole d’admission"
  // },
  // {
  //   title: "Atelier 3",
  //   emp: "1er étage",
  //   desc: "Présentation des projets de deuxième année"
  // }];


  constructor() {}

  ngOnInit() {
  }

  addVisit(numAtelier: number) {
    switch (numAtelier) {
      case 1:
        this.tabAtelier.push({title: "Atelier 1",
                              emp: "1er étage",
                              desc: "Présentation des projets de réalité virtuelle"});
        break;
      case 2:
        this.tabAtelier.push({title: "Atelier 2",
                              emp: "Rez-de-chaussée",
                              desc: "Présentation de l’école et du protocole d’admission"});
        break;
      default:
        this.tabAtelier.push({title: "Atelier 3",
                              emp: "1er étage",
                              desc: "Présentation des projets de deuxième année"});
        break;
    }
  }
}

export class AtelierCard {
  title: string;
  emp: string;
  desc: string;
}
