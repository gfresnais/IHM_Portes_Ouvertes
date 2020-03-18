import { Component, OnInit } from '@angular/core';
import { info } from './info';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {

  listInfo: info[] = [
    {question: "Quels sont les partenaires de l'ensim ?",reponse: "ils existent",categorie: "International"},
    {question: "Le stage est-il obligatoire ?",reponse: "Oui",categorie: "International"},
    {question: "Puis-je partir ou je veux ?",reponse: "Dans la limite des places disponible",categorie: "International"},
    {question: "Y-a t'il des associations ?",reponse: "oui",categorie: "Vie de l'ecole"},
    {question: "Jensim ?",reponse: "La meilleur assos du monde",categorie: "Vie de l'ecole"},
    {question: "Des endroits ou sortir au Mans ?",reponse: "euh... Joker",categorie: "Vie etudiante"},
    {question: "Des soirées ?",reponse: "Nos assos en font pleins pour toi ;)",categorie: "Vie etudiante"},
    {question: "J'ai déjá fait un stage en bts, dois-je en refaire un ?",reponse: "tu peux toujours prier",categorie: "Stage"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
