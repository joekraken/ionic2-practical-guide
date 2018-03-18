import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-sl-options',
  templateUrl: 'sl-options.html'
})
export class SLOptionsPage {
  constructor(private viewCtrl: ViewController) {
  }

  onAction(action: string) {
    // close popover and pass data to parent page
    this.viewCtrl.dismiss({action: action});
  }
}
