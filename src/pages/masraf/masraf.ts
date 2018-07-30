import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'masraf.html'
})
export class MasrafPage {
  selectedItem: any;
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Masraf Tarihi ' + i,
        note: 'Firma' + i
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MasrafPage, {
      item: item
    });
  }
}
