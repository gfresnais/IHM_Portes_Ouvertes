import { Component } from '@angular/core';


@Component({
  selector: 'app-renseignement',
  templateUrl: './renseignement.page.html',
  styleUrls: ['./renseignement.page.scss'],
})
export class RenseignementPage {

  public infos: Info[];
  public i1: Info;
  public i2: Info;
  public i3: Info;

  constructor() {

    this.i1.title = "Information sur l'école";
    this.i1.list = [
      "Dépliant de l'école",
      "Dépliant du concours Geipei Polytech",
      "Dépliant cycle ingénieur",
      "Dépliant Khâgne"
    ];
    this.i2.title = "Information sur l'école";
    this.i2.list = [
      "Dépliant de l'école",
      "Dépliant du concours Geipei Polytech",
      "Dépliant cycle ingénieur",
      "Dépliant Khâgne"
    ];
    this.i3.title = "Information sur l'école";
    this.i3.list = [
      "Dépliant de l'école",
      "Dépliant du concours Geipei Polytech",
      "Dépliant cycle ingénieur",
      "Dépliant Khâgne"
    ];

    this.infos = [this.i1, this.i2, this.i3];
  }

  expandItem(info): void {
    if (info.expanded) {
      info.expanded = false;
    } else {
      info.expanded = true;
    }
  }
}

export class Info {
  public title: string = "titre";
  public expendable: boolean = false;
  public list: string[];
  }