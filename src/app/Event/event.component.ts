import { Component } from '@angular/core';


interface Iproduct{
    pname : string,
    rating : number,
    img : string,
    description: string
}


@Component({
    selector:'app-event',
    templateUrl: './event.component.html',
    styleUrls:['./event.component.scss']
})
export class EventComponent{
    
    productCount : number = 0;
    productMsg : string = 'No Product is Added in Cart.'
    
    card:Array<Iproduct> = []

    productObj: Iproduct = {
    pname: 'Samsung',
    rating: 4.5,
    img: `https://images.unsplash.com/photo-1771944163157-853c3d7325ae?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore unde consequatur rem adipisci earum possimus repellendus! Aliquid debitis, ea error omnis, adipisci ipsum amet veniam est ipsa, harum asperiores.`
  }


    onProductAdd(){
        if(this.productCount < 5){
            this.productCount++;
            this.productMsg = `${this.productCount} Product is Added in Cart.`
        }
    }

    onProductRemove(){
        if(this.productCount > 0){
            this.productCount--;
            this.productMsg = `${this.productCount} Product is Added in Cart.`
        }
    }


    onCardAdd(){
        this.card.push(this.productObj)

    }

    onCardRemove(){
        // if(this.card.length !== 0){
            this.card.pop()
        // }
    }
}