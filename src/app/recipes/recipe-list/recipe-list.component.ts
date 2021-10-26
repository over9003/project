import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_640.jpg'),
    new Recipe('2nd test Recipe', 'this is second test', 'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipe(elem: Recipe){
    this.clickedRecipe.emit(elem)
  }
}
