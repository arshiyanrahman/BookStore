import { Component } from '@angular/core';
import { Books } from '../books';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  // book dummy variable to store the book by detail
  book : any;
 

  constructor( private route: ActivatedRoute, private   booksService : BookserviceService, private cartService : CartserviceService ) {}

  // subscribing to the link being passed & extracting params from it 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.booksService.getByName(params['name']);
       
    });
  }

  // method doing the work of adding books to cart from details-page
  addToCart(item:Books){
    this.cartService.addToCartList(item);
  }
}
