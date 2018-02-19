import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(private navCtrl: NavController) {
  }

  onLoadBuyout() {
    this.navCtrl.pop();
}
}
