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
      st1: "Dépliant de l'école",
      lien1: "http://ensim.univ-lemans.fr/_resources/documents/Plaquette%2520ENSIM%25202020%2520web.pdf?download=true",
      st2: "Dépliant du concours Geipi Plytech",
      lien2: "http://www.demain-ingenieur.fr/wp-content/uploads/Concours-Polytech-Basse-d%C3%A9finition2.pdf",
      st3: "Dépliant cycle ingénieur",
      lien3: "http://ensim.univ-lemans.fr/_resources/documents/Depliant%2520A5%2520Programme%2520de%2520formation%2520classique.pdf?download=true",
      st4: "Dépliant Khâgne",
      lien4: "http://ensim.univ-lemans.fr/_resources/Depliant_%2520Khagne_%2520BL.pdf?download=true",
    },
    {
      titre: "satistiques",
      expendable: false,
      st1: "Débouchées",
      lien1: "http://ensim.univ-lemans.fr/fr/espace-entreprises/insertion-professionnelle.html",
      st2: "Stage",
      lien2: "http://ensim.univ-lemans.fr/fr/espace-entreprises/insertion-professionnelle/stages.html",
      st3: "Entreprises",
      lien3: "http://ensim.univ-lemans.fr/fr/espace-entreprises/insertion-professionnelle/metiers.html",
      st4: "Etudiants",
      lien4: "http://ensim.univ-lemans.fr/fr/espace-entreprises/insertion-professionnelle/parcours-d-ensimiens.html",
    },
    {
      titre: "Programme des portes ouvertes",
      expendable: false,
      st1: "Conférences",
      lien1: "",
      st2: "Ateliers",
      lien2: "",
      st3: "Stands",
      lien3: "",
      st4: "Restauration",
      lien4: "",
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
  public st1: string;
  public lien1: string;
  public st2: string;
  public lien2: string;
  public st3: string;
  public lien3: string;
  public st4: string;
  public lien4: string;
  }