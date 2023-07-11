import { Injectable } from '@angular/core';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  constructor() { }

  // array of type books to store books in cart
  cartList : Books[] = [];
  

  // method to add books to the cart
  addToCartList(item: Books) {
    // checking if cart is already added or not
    item.bookCartAdded = !item.bookCartAdded;
    // if book not added, adding book
    if (!this.cartList.includes(item)) {
      if (item.bookCartAdded) {
        this.cartList.push(item);
      }

    } else {
      console.log("Item already exists in cart.");
    }
  }
  
  
  // returning list of books in cart
  getCartList():Books[] {
    return this.cartList;
  }

  
}
