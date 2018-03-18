import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.svc';
import { Ingredient } from './../../models/ingredient.model';
import { PopoverController } from 'ionic-angular';
import { SLOptionsPage } from './sl-options/sl-options';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService, private popoverCtrl: PopoverController) {
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
    popover.present({ev: event});
  }

  private loadItems() {
    this.ingredients = this.shoppingListService.getItems();
  }
}
