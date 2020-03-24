import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valider-visite',
  templateUrl: './valider-visite.page.html',
  styleUrls: ['./valider-visite.page.scss'],
})
export class ValiderVisitePage implements OnInit {

  // Valeurs possibles : prof, etud, virtual
  id: string;
  // Guide
  guide: string;
  // Nom du guide
  name: string;
  // Promo ou fonction
  fonc: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Set id value to a get parameter from a route
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    switch (this.id) {
      case "prof":
        this.guide = "Un prof";
        this.name = "Aim Ine";
        this.fonc = "Sécurité Informatique";
        break;
      case "virtual":
        this.guide = "Guide virtuel";
        this.name = "Bip Boop";
        this.fonc = "Guide virtuel";
        break;
      default:
        this.guide = "Un élève";
        this.name = "Théo Guidon";
        this.fonc = "4A Info";
        break;
    }
  }

}
