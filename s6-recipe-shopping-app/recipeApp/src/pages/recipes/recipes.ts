import { RecipePage } from './../recipe/recipe';
import { Recipe } from './../../models/recipe.model';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipesService } from './../../services/recipes.svc';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[] =[];
  constructor (
    private navCtrl: NavController,
    private recipeSvc: RecipesService) {
  }

  ionViewWillEnter() {
    this.loadRecipes();
    console.log('recipe page ionViewWillEnter fired');
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'New'});
  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, {recipe: recipe, index: index})
  }

  private loadRecipes() {
    this.recipes = this.recipeSvc.getRecipes();
  }
}
