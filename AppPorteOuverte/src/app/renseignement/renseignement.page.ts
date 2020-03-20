import { Component } from '@angular/core';


@Component({
  selector: 'app-renseignement',
  templateUrl: './renseignement.page.html',
  styleUrls: ['./renseignement.page.scss'],
})
export class RenseignementPage {

  public infos: Info[] = [
    {
      titre: "Informations sur l'école",
      expendable: false,
      lien1: "Dépliant de l'école",
      lien2: "Dépliant du concours Geipi Plytech",
      lien3: "Dépliant cycle ingénieur",
      lien4: "Dépliant Khâgne",
    },
    {
      titre: "Informations sur l'école",
      expendable: false,
      lien1: "Dépliant de l'école",
      lien2: "Dépliant du concours Geipi Plytech",
      lien3: "Dépliant cycle ingénieur",
      lien4: "Dépliant Khâgne",
    },
    {
      titre: "Informations sur l'école",
      expendable: false,
      lien1: "Dépliant de l'école",
      lien2: "Dépliant du concours Geipi Plytech",
      lien3: "Dépliant cycle ingénieur",
      lien4: "Dépliant Khâgne",
    },
  ]

  constructor() {  }

  expandItem(info): void {
    if (info.expanded) {
      info.expanded = false;
    } else {
      info.expanded = true;
    }
  }
}

export class Info {
  public titre: string;
  public expendable: boolean;
  public lien1: string;
  public lien2: string;
  public lien3: string;
  public lien4: string;
  }