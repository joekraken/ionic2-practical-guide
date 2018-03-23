import { ViewController } from 'ionic-angular';
import { Location } from './../../models/location.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  loc: Location;
  marker: Location;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    this.loc = this.navParams.get('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');
  }

  onSetMarker(event: any) {
    console.log(event);
    this.marker = new Location(event.coords.lat, event.coords.lng);
  }

  onConfirm() {
    this.viewCtrl.dismiss(this.marker);
  }

  onAbort() {
    this.viewCtrl.dismiss();
  }
}
