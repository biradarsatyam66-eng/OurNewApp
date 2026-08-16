import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoweCase]'
})
export class LoweCaseDirective {

  constructor() { }

  @HostListener('keyup',['$event'])
  onformet(eve:Event){
    let ele = (eve.target as HTMLInputElement)
    let val:string = ele.value
    console.log(val);

    if(val.length > 16){
      val = val.substring(0,16)
      console.log(val);
      ele.value = val
    }
    this.chunk(val)
  }

  chunk(str:string){
    let arr = []
    for(let i = 0 ; i < str.length ; i = i + 4){
      arr.push(str.slice(i, i + 4))
    }
    console.log(arr)
  }

}
