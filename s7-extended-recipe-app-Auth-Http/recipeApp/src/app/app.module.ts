import { RecipesService } from './../services/recipes.svc';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RecipePage } from '../pages/recipe/recipe';
import { TabsPage } from '../pages/tabs/tabs';
import { EditRecipePage } from './../pages/edit-recipe/edit-recipe';
import { RecipesPage } from './../pages/recipes/recipes';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { ShoppingListService } from '../services/shopping-list.svc';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth.svc';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    TabsPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    AuthService,
    RecipesService,
    ShoppingListService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
