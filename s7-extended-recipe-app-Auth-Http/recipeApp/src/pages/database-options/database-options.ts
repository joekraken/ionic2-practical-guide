import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-database-options',
  templateUrl: 'database-options.html'
})
export class DatabaseOptionsPage {
  constructor(private viewCtrl: ViewController) {
  }

  onAction(action: string) {
    // close popover and pass data to parent page
    this.viewCtrl.dismiss({action: action});
  }
}
