import  {Directive,Renderer,ElementRef,HostListener,HostBinding} from '@angular/core'

@Directive({
    selector:'[cc]'
})
export class ColorChanger {
    //constructor(ef:ElementRef,ren:Renderer){
      //  ren.setElementStyle(ef.nativeElement,'backgroundColor','light green')\
      private  defaultColor=' pink'
      @HostListener('mouseenter')
      addColor(){
          this.defaultColor='lightgreen'
      }
         @HostListener('mouseleave')
      removeColor(){
          this.defaultColor='lightblue'
      }
      @HostBinding('style.backgroundColor')
      get  applyStyle(){
          return this.defaultColor;
      }
    }
