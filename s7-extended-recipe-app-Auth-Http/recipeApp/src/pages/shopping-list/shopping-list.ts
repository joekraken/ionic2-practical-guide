import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.svc';
import { Ingredient } from './../../models/ingredient.model';
import { AlertController, PopoverController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth.svc';
import { DatabaseOptionsPage } from './../database-options/database-options';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService,
      private popoverCtrl: PopoverController,
      private authSvc: AuthService,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.loadItems();
  }
  onAddItem(form: NgForm) {
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onRemoveItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  onShowOptions(event: MouseEvent) {
    // display loading message, lodaing.dismiss() will trigger page refresh
    const loading = this.loadingCtrl.create({
      content: 'please wait...'
    });
    const popover = this.popoverCtrl.create(DatabaseOptionsPage);
    // to display popover at mouse click coordinates
    // assign to the 'ev' property the current page's event
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (!data) {
        return;
      }
      if (data.action == 'load') {
        loading.present();
        this.authSvc.getActiveUser().getToken()
        .then((token:string) => {
          this.shoppingListService.fetchList(token)
            .subscribe(
              (data: Ingredient[]) => {
                loading.dismiss();
                if (data) {
                  this.ingredients = data;
                  this.shoppingListService.setItems(data);
                }
                else {
                  this.ingredients = [];
                }
              },
              err => { loading.dismiss(); this.handleError(err.json().error); }
            )
        })
        .catch(err => {
          console.log(err);
        });
      }
      else if (data.action == 'store') {
        loading.present();
        this.authSvc.getActiveUser().getToken()
        .then((token:string) => {
          this.shoppingListService.storeList(token)
            .subscribe(
              () => {
                loading.dismiss();
              },
              err => { loading.dismiss(); this.handleError(err.json().error); }
            )
        })
        .catch(err => {
          console.log(err);
        });
      }
    });
  }

  private loadItems() {
    this.ingredients = this.shoppingListService.getItems();
  }

  private handleError(msg: string) {
    const alert = this.alertCtrl.create({
      title: 'error occurred!',
      message: msg,
      buttons: ['Ok']
    });
    alert.present();
  }
}
