import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';

export class RecipesService {
  private recipes: Recipe[] = [];

  addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty, ingredients));
  }

  addRecipes(items: Recipe[]) {
    this.recipes.push(...items);
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
}
