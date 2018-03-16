import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
  signinForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.InitializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onSignin() {
    const value = this.signinForm.value;
    console.log(value);

    this.signinForm.reset();
    // this.navCtrl.popToRoot();
  }

  private InitializeForm() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }
}
