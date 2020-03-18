import { Component, OnInit } from '@angular/core';
import { info, cate } from './info';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {

  listCate: cate[] = [
    {categorie: "International"},
    {categorie: "Vie etudiante"},
    {categorie: "Autre"},
    {categorie: "Stage"}
  ]

  listInfo: info[] = [
    {question: "Quels sont les partenaires de l'ensim ?",reponse: "ils existent",categorie: "International"},
    {question: "Le stage est-il obligatoire ?",reponse: "Oui",categorie: "International"},
    {question: "Puis-je partir ou je veux ?",reponse: "Dans la limite des places disponible",categorie: "International"},
    {question: "Y-a t'il des associations ?",reponse: "oui",categorie: "Vie etudiante"},
    {question: "Jensim ?",reponse: "La meilleur assos du monde",categorie: "Vie etudiante"},
    {question: "Des endroits ou sortir au Mans ?",reponse: "euh... Joker",categorie: "Vie etudiante"},
    {question: "Des soirées ?",reponse: "Nos assos en font pleins pour toi ;)",categorie: "Vie etudiante"},
    {question: "J'ai déjá fait un stage en BTS, dois-je en refaire un ?",reponse: "tu peux toujours prier",categorie: "Stage"},
    {question : "Lorem ipsum dolor sit amet ?",reponse: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",categorie: "Autre"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
