import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.svc';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  // public params list 1st, private params listed at end
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private loadingCtrl: LoadingController, private authService: AuthService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.InitializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup() {
    const value = this.signupForm.value;

    const loading = this.loadingCtrl.create({
      content: 'signing up...'
    });
    loading.present();
    this.authService.signup(value.email, value.password)
      .then(data => {
        loading.dismiss();
        console.log('authSvc promise:');
        console.log(data);
      })
      .catch(err => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'signup failed',
          message: err.message,
          buttons: ['Ok']
        });
        alert.present();
      });

    //this.signupForm.reset();
    // this.navCtrl.popToRoot();
  }

  private InitializeForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }
}
