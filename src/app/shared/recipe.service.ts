import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe';
@Injectable()
export class RecipeService {
     loadRecipes():Recipe[]{
       return[ new Recipe ('Pancake', 'Chocolate Pancake', 
       'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/d/2000/dark_chocolate_peppermint_pancakes_2000x1125.jpg',
       new Date('9/27/2019'),
       new Date('2021/10/10'),
       7,200),
       
       
    new Recipe ('Waffle', 'Chocolate Waffle', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzkFRZOwRlYWR6Mm29Xv10tIOqzwdEVTxVf2tEtldh9TKZA2FIg',
       new Date('9/28/2019'),
       new Date('2021/11/11'),
       90,150)];
    }
}
 // recipe = new Recipe('Pancake', 'Chocolate Pancake', 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/d/2000/dark_chocolate_peppermint_pancakes_2000x1125.jpg');
