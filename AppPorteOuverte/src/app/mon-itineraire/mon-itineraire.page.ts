import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-itineraire',
  templateUrl: './mon-itineraire.page.html',
  styleUrls: ['./mon-itineraire.page.scss'],
})
export class MonItinerairePage implements OnInit {

  listCards: MyCard[] = [{ titre: "TD1 Réamix", sous_titre: "1er étage", 
                          description: "Présentation des projets de réalité virtuelle", 
                          visite: true
                        },
                        {
                          titre: "C03 Présentation de l'école", sous_titre: "Rez-de-chaussée", 
                          description: "Présentation de l'école et du protocole d'admission", 
                          visite: false
                        },
                        {
                          titre: "TD4 Projet 2A", sous_titre: "1er étage", 
                          description: "Présentation des projets de deuxième année", 
                          visite: false
                        }];

  constructor() { }

  ngOnInit() {
  }

}

export class MyCard {
  titre: string;
  sous_titre: string;
  description: string;
  visite: boolean;
}