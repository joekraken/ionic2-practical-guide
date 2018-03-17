import { SignupPage } from './../pages/signup/signup';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SigninPage } from './../pages/signin/signin';
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  // create a reference using @ViewChild to access NavController
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyC4Ko3fxh3_FEua7WNVoK2q-5eJWe7Y7PQ",
      authDomain: "ionic2-recipe-book-e971f.firebaseapp.com"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {

  }
}

