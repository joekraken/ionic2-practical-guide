import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public message = 'message';
  public counters = [0,0];
  // public counters = [
  //   {
  //     name: 'tapped',
  //     count: 0
  //   },
  //   {
  //     name: 'pressed',
  //     count: 0
  //   }];

  constructor(public navCtrl: NavController) {
    this.resetMessage();
  }

  onTap() {
    this.counters[0]++;
    this.checkSequence();
  }

  onPress() {
    this.counters[1] += 1;
    this.checkSequence();
  }

  onResetType(msg: string) {
    switch (msg) {
      case 'all':
        this.resetAllCounters();
        this.resetMessage();
        break;
      case 'tap':
        this.resetCounterByIndex(0);
        this.resetMessage();
        break;
      case 'press':
        this.resetCounterByIndex(1);
        this.resetMessage();
        break;
    }
  }

  resetAllCounters() {
    this.resetCounterByIndex(0);
    this.resetCounterByIndex(1);
  }

  resetCounterByIndex(index: number) {
    this.counters[index] = 0;
  }

  // use this with *ngIf directive on <p></p> or <h></h> tags
  didWin(){
    return this.counters[0] == 2 && this.counters[1] == 4;
  }

  private checkSequence() {
    if (this.counters[0] == 2 && this.counters[1] == 4) {
      this.message = 'success!';
    }
  }
  private resetMessage() {
    this.message = 'tap twice, press four times';
  }
}
