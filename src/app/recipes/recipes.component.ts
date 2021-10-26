import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() receipeToShow: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  showRecipe(recipe: Recipe){
    this.receipeToShow = recipe;
  }
}
