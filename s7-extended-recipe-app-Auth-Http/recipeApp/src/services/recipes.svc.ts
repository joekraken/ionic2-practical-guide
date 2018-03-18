import { Injectable } from '@angular/core';
import { AuthService } from './auth.svc';
import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];

  constructor(private http: HttpClient,
    private authSvc: AuthService) {}

  addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
  }

  addRecipes(items: Recipe[]) {
    this.recipes.push(...items);
  }

  setItems(items: Recipe[]) {
    this.recipes = [];
    this.addRecipes(items);
  }

  updateRecipe(index: number, title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes[index].editAll(title, description, difficulty, ingredients);
    // this.recipes[index] = new Recipe(title, description, difficulty, ingredients);
  }
  // return a copy of recipes array
  getRecipes() {
    return this.recipes.slice();
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authSvc.getActiveUser().uid;
    // return the Observable after put() executes
    return this.http.put(environment.firebaseUrl + userId + '/recipe-list.json?auth=' + token,
      this.recipes);
  }

  fetchList(token: string) {
    const userId = this.authSvc.getActiveUser().uid;
    // return Observable after get executes
    return this.http.get(environment.firebaseUrl + userId + '/recipe-list.json?auth=' + token)
  }
}
