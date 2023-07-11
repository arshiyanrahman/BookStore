import { Injectable } from '@angular/core';
import { Books } from './books';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http : HttpClient, private router : Router) { }

  bookList : Books[] =[];

  url1="http://localhost:8087/allbooks"
  
  // returning all the books 
  getAllBooks(){
    console.log("in getAllBooks()");
    return this.http.get<Books[]>(this.url1).subscribe((resp)=>{
      this.bookList = resp;
    });
  }

  // searching for a book by name
  getByName(property : string){
    const lowerCaseProperty = property.toLowerCase();

    for(const book of this.bookList)
    {
      if(book.bookName.toLowerCase() === lowerCaseProperty){
        return book;
      }
    }
    this.router.navigate(["/not-found"]);
    return {};
  }
}
