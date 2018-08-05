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
import { LoginPage } from '../pages/login/login';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  
  showSplash = true;

  constructor(public platform: Platform, public statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ana Sayfa', component: HomePage },
      { title: 'Satış/Alış', component: ListPage },
      { title: 'Tahsilat/Ödeme', component: TahsilatPage },
      { title: 'Masraf', component: MasrafPage },
      { title: 'Müşteri', component: MusteriPage},
      { title: 'Personel', component: PersonelPage},
      { title: 'Ürün/Hizmet', component: UrunPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
