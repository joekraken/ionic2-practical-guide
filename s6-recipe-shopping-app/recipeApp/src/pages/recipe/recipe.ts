import { Recipe } from './../../models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { ShoppingListService } from '../../services/shopping-list.svc';
import { RecipesService } from './../../services/recipes.svc';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shoppingListSvc: ShoppingListService,
    private recipesSvc: RecipesService) {
  }

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  ionViewWillEnter() {
  }

  onAddIngredients() {
    this.shoppingListSvc.addItems(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipesSvc.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {recipe: this.recipe, index: this.index, mode: 'Edit'});
  }

}
