import { Recipe } from './../../models/recipe.model';
import { NavController } from 'ionic-angular';
import { RecipesService } from './../../services/recipes.svc';
import { Component, OnInit } from '@angular/core';
import { NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Ingredient } from './../../models/ingredient.model';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  private toastDuration = 1650;
  mode = 'new';
  selectOptions = ['easy', 'medium', 'hard'];
  recipeForm: FormGroup;
  recipe: Recipe;
  index: number;

  constructor(private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private recipeListSvc: RecipesService,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit() {
    //console.log(this.recipeForm);
    const value = this.recipeForm.value;
    let ingredients = [];
    // const list = this.recipeForm.get('ingredients').value;
    if (value.ingredients.length > 0) {
      ingredients = value.ingredients.map(name => {
        return {name: name, amount: 1};
      });
      // list.forEach(element => {
      //   ingredients.push(new Ingredient(element, 1));
      // });
    }
    if (this.mode == 'Edit') {
      this.recipeListSvc.updateRecipe(this.index, value.title, value.description, value.difficulty, ingredients);
    }
    else {
      this.recipeListSvc.addRecipe(value.title, value.description, value.difficulty, ingredients);
    }
    //this.recipeListSvc.addRecipe(<string>this.recipeForm.get('title').value, this.recipeForm.get('description').value as string, this.recipeForm.get('difficulty').value as string, ingredients);

    this.recipeForm.reset();
    this.navCtrl.popToRoot();
  }

  onManageIngredients() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'choose an action to do',
      buttons: [
        {
          text: 'add ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'remove ingredients',
          role: 'destructive',
          handler: () => {
            const fArr: FormArray = <FormArray>this.recipeForm.get('ingredients');
            const len = fArr.length;
            if (len > 0) {
              for (let i = len-1; i >=0; i--) {
                fArr.removeAt(i);
              }
              const toast = this.toastCtrl.create({
                message: 'all ingredients deleted',
                duration: this.toastDuration,
                position: 'top'
              });
              toast.present();
            }
          }
        },
        {
          text: 'cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert() {
    return this.alertCtrl.create({
      title: 'add ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        }
      ],
      buttons: [
        {
          text: 'cancel',
          role: 'cancel'
        },
        {
          text: 'add',
          handler: data => {
            // String.trim() : removes whitespace
            if (data.name.trim() == '' || data.name == null) {
              const toast = this.toastCtrl.create({
                message: 'please enter valid value',
                duration: this.toastDuration,
                position: 'top'
              });
              toast.present();
              return;
            };
            (<FormArray>this.recipeForm.get('ingredients'))
              .push(new FormControl(data.name, Validators.required));
            const toast = this.toastCtrl.create({
                message: 'item added',
                duration: this.toastDuration,
                position: 'top'
              });
            toast.present();
          }
        }
      ]
    });
  }

  private initializeForm() {
    // Form vars set default
    let title = null;
    let description = null;
    let difficulty = 'medium';
    let ingredients = [];

    // set Form vars to recipe values, if edit mode
    if (this.mode == 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      for (let ingredient of this.recipe.ingredients) {
        ingredients.push(new FormControl(ingredient.name, Validators.required));
      }
    }

    this.recipeForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      description: new FormControl(description, Validators.required),
      difficulty: new FormControl(difficulty, Validators.required),
      ingredients: new FormArray(ingredients)
    })
  }
}
