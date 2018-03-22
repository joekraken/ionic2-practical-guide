import { SetLocationPage } from './../set-location/set-location';
import { Location } from './../../models/location.model';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  loc: Location = {
    lat: 38.438845,
    lng: -105.242047
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onLocate() {

  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, {location: this.loc});
    modal.present();
  }

  onTakePhoto() {

  }
}
