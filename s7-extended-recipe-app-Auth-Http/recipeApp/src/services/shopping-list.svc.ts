import { environment } from './environment';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from './../models/ingredient.model';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.svc';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  // inject Http service
  constructor(private http: HttpClient,
    private authSvc: AuthService) {}

  addItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items);
  }

  // return a copy of ingredients array
  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authSvc.getActiveUser().uid;
    // return the Observable after put() executes
    return this.http.put(environment.firebaseUrl + userId + '/shopping-list.json?auth=' + token,
      this.ingredients);
    // this.http.get('my-url')
  }
}
