import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public askEtu: AlertController,
  ) {
    this.initializeApp();
  }

  showAppelEtudiant(){  //doesn't work
    const appelEtu = this.askEtu.create({ 
      header: 'Un eleve arrive vous aider',
      subHeader: 'this',
      message: 'doesnt work',
      buttons: ['OK'],
    }).then(appelEtu => appelEtu.present());
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
