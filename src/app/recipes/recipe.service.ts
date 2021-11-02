import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>()

  constructor(private shoppingListService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe(
      'a test Recipe',
      'this is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_640.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]),
    new Recipe(
      '2nd test Recipe',
      'this is second test',
      'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 2)
      ])
  ];

  getRecipes () {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }

}
