import { RecipeListService } from './../../services/recipe-list.svc';
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

  constructor(private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private recipeListSvc: RecipeListService) {
  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
    console.log(<string>this.recipeForm.get('ingredients').value);
    this.recipeListSvc.addItem(
      <string>this.recipeForm.get('title').value,
      this.recipeForm.get('description').value as string,
      this.recipeForm.get('difficulty').value as string,
      this.recipeForm.get('ingredients').value as string[]
    );
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
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      difficulty: new FormControl('medium', Validators.required),
      ingredients: new FormArray([])
    })
  }
}
