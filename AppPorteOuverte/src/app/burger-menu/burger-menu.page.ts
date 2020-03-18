import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'burger-menu',
  templateUrl: 'burger-menu.page.html',
  styleUrls: ['./burger-menu.page.scss'],
})
export class BurgerMenuPage {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}