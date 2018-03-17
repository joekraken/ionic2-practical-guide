import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.svc';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;

  // public params list 1st, private params listed at end
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  ngOnInit() {
    this.InitializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup() {
    const value = this.signupForm.value;
    console.log(value);
    this.authService.signup(value.email, value.password)
      .then(data => {console.log('authSvc promise:');console.log(data);})
      .catch(err => console.log(err));

    this.signupForm.reset();
    // this.navCtrl.popToRoot();
  }

  private InitializeForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }
}
