import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { NgForm } from '@angular/forms';
import{ DBConnect } from 'src/app/shared/dbConnect.service';


@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
 loadedPosts : any[]=[];
 addRecipe(nf:NgForm){
     // console.log("Recipe Added" , nf.value);
      this.db.addrecipeToDB(nf.value);
 }
 
 loadRecipe(){
    // console.log("Retrive recipe");
        this.db.loadRecipeToDB().subscribe(
            posts=>{this.loadedPosts=posts})
            console.log(this.loadedPosts);
 }
 
  constructor(private db: DBConnect) {}

  ngOnInit() {
  }
  
 
  

}
