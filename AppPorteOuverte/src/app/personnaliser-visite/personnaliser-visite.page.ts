import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnaliser-visite',
    templateUrl: './personnaliser-visite.page.html',
  styleUrls: ['./personnaliser-visite.page.scss'],
})
export class PersonnaliserVisitePage implements OnInit {
  
  // Liste des ateliers
  tabAtelier: AtelierCard[] = []; 

  constructor() {}

  ngOnInit() {
  }

  /**
   * Ajoute un atelier au tableau
   * @param numAtelier 
   */
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

  /**
   * Supprime une entrée du tableau à partir d'un titre
   * @param title 
   */
  removeVisit(title: string) {
    // Trouve l'index dans le tableau de la première occurrence du titre
    let index = this.tabAtelier.findIndex(x => x.title === title);
    // Supprime l'entrée à partir de l'index
    this.tabAtelier.splice(index, 1);
  }
}

export class AtelierCard {
  title: string;
  emp: string;
  desc: string;
}
