import { DatabaseOptionsPage } from './../database-options/database-options';
import { RecipePage } from './../recipe/recipe';
import { Recipe } from './../../models/recipe.model';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesService } from './../../services/recipes.svc';
import { AlertController, PopoverController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../services/auth.svc';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: Recipe[] =[];
  constructor (
    private navCtrl: NavController,
    private recipeSvc: RecipesService,
    private popoverCtrl: PopoverController,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
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

  onShowOptions(event: MouseEvent) {
    // display loading message, lodaing.dismiss() will trigger page refresh
    const loading = this.loadingCtrl.create({
      content: 'please wait...'
    });
    const popover = this.popoverCtrl.create(DatabaseOptionsPage);
    // to display popover at mouse click coordinates
    // assign to the 'ev' property the current page's event
    popover.present({ev: event});
    popover.onDidDismiss(data => {
      if (data.action == 'load') {
        loading.present();
        this.authSvc.getActiveUser().getToken()
        .then((token:string) => {
          this.recipeSvc.fetchList(token)
            .subscribe(
              (data: Recipe[]) => {
                loading.dismiss();
                if (data) {
                  this.recipes = data;
                  this.recipeSvc.setItems(data);
                }
                else {
                  this.recipes = [];
                }
              },
              err => { loading.dismiss(); this.handleError(err.json().error); }
            )
        })
        .catch(err => {
          console.log(err);
        });
      }
      else if (data.action == 'store') {
        loading.present();
        this.authSvc.getActiveUser().getToken()
        .then((token:string) => {
          this.recipeSvc.storeList(token)
            .subscribe(
              () => {
                loading.dismiss();
              },
              err => { loading.dismiss(); this.handleError(err.json().error); }
            )
        })
        .catch(err => {
          console.log(err);
        });
      }
    });
  }

  private loadRecipes() {
    this.recipes = this.recipeSvc.getRecipes();
  }

  private handleError(msg: string) {
    const alert = this.alertCtrl.create({
      title: 'error occurred!',
      message: msg,
      buttons: ['Ok']
    });
    alert.present();
  }
}
