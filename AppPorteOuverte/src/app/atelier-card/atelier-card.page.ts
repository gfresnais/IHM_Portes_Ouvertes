import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atelier-card',
  templateUrl: './atelier-card.page.html',
  styleUrls: ['./atelier-card.page.scss'],
})
export class AtelierCardPage implements OnInit {
  string title;
  string emplacem;
  string descrip;

  constructor() { }

  ngOnInit() {
  }

}
