import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.svc';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
  signinForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController, private authService: AuthService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.InitializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onSignin() {
    const value = this.signinForm.value;
    const loading = this.loadingCtrl.create({
      content: 'signin in...'
    })
    this.authService.signin(value.email, value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(err => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'signin failed',
          message: err.message,
          buttons: ['Ok']
        });
        alert.present();
      });
    //this.signinForm.reset();
    // this.navCtrl.popToRoot();
  }

  private InitializeForm() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }
}
