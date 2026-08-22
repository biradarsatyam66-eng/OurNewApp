import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoweCase]'
})
export class LoweCaseDirective {

  constructor() { }

  // @HostListener('keyup',['$event'])
  // onformet(eve:Event){
  //   let ele = (eve.target as HTMLInputElement)
  //   let val:string = ele.value
  //   console.log(val);

  //   if(val.length > 16){
  //     val = val.substring(0,16)
  //     console.log(val);
  //     ele.value = val
  //   }
  //   this.chunk(val)
  // }

  // chunk(str:string){
  //   let arr = []
  //   for(let i = 0 ; i < str.length ; i = i + 4){
  //     arr.push(str.slice(i, i + 4))
  //   }
  //   console.log(arr)
  // }


  @HostListener('keyup',['$event'])
  formetcard(eve:Event){
    let ele = eve.target as HTMLInputElement
    let val = ele.value.replace(/\s/g, '');
    console.log(val);

    if(val.length > 16){
      val = val.substring(0,16)
    }

    if(/[^\d]/.test(val)){
      ele.nextElementSibling?.classList.remove('d-none')
  }else{
      ele.nextElementSibling?.classList.add('d-none')
  }

    let result = this.onchunk(val, 4);
    ele.value = result;
  }


  onchunk(str:string,limit:number){
    let arr = []
    for(let i = 0; i < str.length; i = i + limit){
      arr.push(str.slice(i, i+limit))
    }
    
    console.log(arr)
    return arr.join(' ');
  }

}
