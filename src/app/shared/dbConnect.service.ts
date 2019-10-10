import {Injectable} from '@angular/core';
import {HttpClient } from   '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DBConnect {
    addrecipeToDB(recipe : any){
      //  console.log("db");
      this.http.post('https://simran-tcs.firebaseio.com/',recipe).subscribe(mydata=>{console.log(mydata)
          
      })
    }
    loadRecipeToDB(){
      //  console.log("select from recipe");
        return this.http
          .get(
            'https://simran-tcs.firebaseio.com/recipe.json'
          )
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          );
    }
    constructor(private http:HttpClient){}
    
}
    