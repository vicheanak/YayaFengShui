import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage';

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
    private sqlite: SQLite,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

   

      // set a key/value
      this.storage.set('H', 'H5');
      this.storage.set('E', 'E9');

      // Or to get a key/value pair
      this.storage.get('age').then((val) => {
   
      });

      // this.sqlite.create({
      //   name: 'data.db',
      //   location: 'default'
      // }).then((db: SQLiteObject) => {
      //   db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      //     .then(() => console.log('Executed SQL'))
      //     .catch(e => console.log(e));
      // })
      // .catch(e => console.log(e));

    });
  }
}
