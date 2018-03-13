import { Ingredient } from './ingredient.model';
export class Recipe {
  constructor(public title: string, public description: string, public difficulty: string, public ingredients: Ingredient[]) {
  }
  editTitle(value: string) {
    this.title = value;
  }
  editDescription(value: string) {
    this.description = value;
  }
  editDifficulty(value: string) {
    this.difficulty = value;
  }
  editIngredients(value: Ingredient[]) {
    this.ingredients = value;
  }
  editAll(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
    this.editTitle(title);
    this.editDescription(description);
    this.editDifficulty(difficulty);
    this.editIngredients(ingredients);
  }
}
