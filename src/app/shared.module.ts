import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DropdownDirective} from './shared/dropdown.directive';
import {ColorChanger} from './shared/colorchanger.directive';


@NgModule({
    declarations: [
     DropdownDirective,
     ColorChanger
     
     
   ],
   exports :[
     DropdownDirective,
     ColorChanger

       ],
  
  imports: [
    BrowserModule
  ],

})
export class SharedModule {}
