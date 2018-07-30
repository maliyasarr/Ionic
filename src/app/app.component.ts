import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SatisPage } from '../pages/satis/satis';
import { TahsilatPage } from '../pages/tahsilat/tahsilat';
import { MasrafPage } from '../pages/masraf/masraf';
import { MusteriPage } from '../pages/musteri/musteri';
import { PersonelPage } from '../pages/personel/personel';
import { UrunPage } from '../pages/urun/urun';
//import { RaporPage } from '../pages/rapor/rapor';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ana Sayfa', component: HomePage },
      { title: 'Satış/Alış', component: ListPage },
      /* { title: 'Satış/Alış', component: SatisPage }, */
      { title: 'Tahsilat/Ödeme', component: TahsilatPage },
      { title: 'Masraf', component: MasrafPage },
      { title: 'Müşteri', component: MusteriPage},
      { title: 'Personel', component: PersonelPage},
      { title: 'Ürün/Hizmet', component: UrunPage}
      //{ title: 'Rapor Merkezi', component: RaporPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
