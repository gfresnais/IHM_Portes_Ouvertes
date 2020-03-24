import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


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
      titre: "satistiques",
      expendable: false,
      lien1: "Débouchées",
      lien2: "Salaires",
      lien3: "Entreprises",
      lien4: "Etudiants",
    },
    {
      titre: "Programme des portes ouvertes",
      expendable: false,
      lien1: "Conférences",
      lien2: "Ateliers",
      lien3: "Stands",
      lien4: "Restauration",
    },
  ]

  constructor(public alertController: AlertController) {  }

  expandItem(info): void {
    if (info.expanded) {
      info.expanded = false;
    } else {
      info.expanded = true;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Un élève arrive vous aider!",
      subHeader: "Temps estimé :  7 minutes",
      message: "Nom de l''élève : Théo Guidon",
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
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