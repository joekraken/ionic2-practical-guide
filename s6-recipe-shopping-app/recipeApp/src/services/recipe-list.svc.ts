import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';

export class RecipeListService {
  private recipes: Recipe[] = [];

  addItem(title: string, description: string, difficulty: string, ingredients: string[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
  }

  addItems(items: Recipe[]) {
    this.recipes.push(...items);
  }

  updateItem() {
    // TODO
  }
  // return a copy of recipes array
  getItems() {
    return this.recipes.slice();
  }

  removeItem(index: number) {
    this.recipes.splice(index, 1);
  }
}
