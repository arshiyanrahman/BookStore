import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
// booklist array of type Books[] to store all the books
 bookList : Books[]= this.bookService.bookList;



constructor(private router:Router, private bookService : BookserviceService, private cartservice : CartserviceService){
}

// method returning all the books 
  ngOnInit(): void {
    this.bookService.getAllBooks();

  }

// method to display all book details
detailsDisplay(name : string){
  this.router.navigate(['details',name])
}

// method to add book to cart from home-page
addToCart(item : Books){
  this.cartservice.addToCartList(item);
}
}
