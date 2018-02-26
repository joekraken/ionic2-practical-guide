import { Ingredient } from './ingredient.model';
export class Recipe {
  constructor(public title: string, public description: string, public difficulty: string, public ingredients: string[]) {
  }
  updateTitle(value: string) {
    this.title = value;
  }
  updateDescription(value: string) {
    this.description = value;
  }
  updateDifficulty(value: string) {
    this.difficulty = value;
  }
}
