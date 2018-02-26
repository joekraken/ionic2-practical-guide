import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';

export class RecipeListService {
  private recipes: Recipe[] = [];

  addItem(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
    console.log(this.recipes);
  }

  addItems(items: Recipe[]) {
    this.recipes.push(...items);
  }

  editItem(index: number, title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes[index].editAll(title, description, difficulty, ingredients);
  }
  // return a copy of recipes array
  getItems() {
    return this.recipes.slice();
  }

  removeItem(index: number) {
    this.recipes.splice(index, 1);
  }
}
