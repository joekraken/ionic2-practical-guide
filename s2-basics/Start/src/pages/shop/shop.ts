import { BuyoutPage } from './buyout/buyout';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Component } from '@angular/core';
@Component({
    selector: 'page-shop',
    templateUrl: './shop.html'
})
export class ShopPage {
    constructor(private navCtrl: NavController) {        
    }
    /*
    * TODO: pass a JSON  as string, then parse JSON into object
    */
    onLoadBuyout(product: {name: string, qty: number}) {
        this.navCtrl.push(BuyoutPage, product)
    }
}