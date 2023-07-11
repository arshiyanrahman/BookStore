import { Component } from '@angular/core';
import { Books } from '../books';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // creating an array of type books to store books in cart
  cartBooks: Books[] = []; 


  constructor(private cartService : CartserviceService ) {}
  
  // method to return books present in cart taken from cart-service
  getCartItems(){
    this.cartBooks = this.cartService.getCartList();
  }

  // method to delete item for cart
  deleteFromCart(item: Books) {
    const index = this.cartBooks.indexOf(item);
    if (index > -1) {
      // splice() to remove single element starting from index
      this.cartBooks.splice(index, 1);
      //calculating totalAmount() once again toupdate price
      this.totalAmount();
    } else {
      console.log("Item not found in cart.");
    }
  }

    // numberOfCartItems() to return tonumber of books in cart
  numberOfCartItems(){
    return this.cartBooks.length;
  }

  // method to find total price of books
  totalAmount() : number {
    let total = 0;
    for(const book of this.cartBooks){
     total += book.bookPrice;
    }
    return total;
  }

  // ngOnInit() returning the books in the cart
  ngOnInit() {
    this.getCartItems();
  }
}
