import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.svc';
import { Ingredient } from './../../models/ingredient.model';
import { PopoverController } from 'ionic-angular';
import { SLOptionsPage } from './sl-options/sl-options';
import { AuthService } from '../../services/auth.svc';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService,
      private popoverCtrl: PopoverController,
      private authSvc: AuthService) {
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
    const popover = this.popoverCtrl.create(SLOptionsPage);
    // to display popover at mouse click coordinates
    // assign to the 'ev' property the current page's event
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data.action == 'load') {

      }
      else if (data.action == 'store') {
        this.authSvc.getActiveUser().getToken()
        .then((token:string) => {
          this.shoppingListService.storeList(token)
            .subscribe(
              () => { console.log('success: stored shopping list'); },
              err => { console.log(err); }
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
}
