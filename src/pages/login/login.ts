import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { HomePage } from '../home/home'
import { RegisterPage } from '../register/register'
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mail: string;
  password: string;

  data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.mail +" "+ this.password);
    if(this.mail == 'mali' && this.password == "123"){
      this.navCtrl.setRoot(HomePage);
    }

    if(this.mail != '' && this.password != ""){
      
      var url = "https://api.finansfix.com/portal/v1/auth/login";
      let postData = new FormData();
      postData.set('Email',this.mail);
      postData.set('Password',this.password);

      debugger;
      this.data = this.http.post(url,postData);
      this.data.subscribe(data =>{
        console.log(data);
        this.navCtrl.setRoot(HomePage);
      })
    }


  }

  register() {
    debugger;
    this.navCtrl.push(RegisterPage);
  }

}
