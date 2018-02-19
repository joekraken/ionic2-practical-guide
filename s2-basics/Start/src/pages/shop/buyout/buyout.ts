import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'page-buyout',
    templateUrl: './buyout.html'
})
export class BuyoutPage implements OnInit {
    item: any;
    /**
     *
     */
    constructor(private navParams: NavParams, private navCtrl: NavController) {        
    }
    ngOnInit() {
        this.item = this.navParams.data;
    }
    onConfirmOrder() {
        this.navCtrl.popToRoot();
    }
}