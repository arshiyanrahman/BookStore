import { Component } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private bookService : BookserviceService, private router: Router){}

  // method to find the book
  searchBook(name : string){
    this.router.navigate(['details',name])
  }
}
