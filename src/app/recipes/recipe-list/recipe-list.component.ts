import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {RecipeService} from '../../shared/recipe.service';
import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
 // recipe = new Recipe('Pancake', 'Chocolate Pancake', 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/d/2000/dark_chocolate_peppermint_pancakes_2000x1125.jpg');

  constructor(recipeService:RecipeService) {
      this.recipes = recipeService.loadRecipes();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
