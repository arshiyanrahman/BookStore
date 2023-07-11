import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, private userService : UserserviceService, private bookService : BookserviceService){
   
  }

  // users : User[]= [];

  // login form defined of type  FormGroup
  loginForm :  FormGroup = new FormGroup({
  //using form control to bring and store value of credentials from template
    userName : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)])
    
  });

  ngOnInit(){
    this.bookService.getAllBooks();
    // this.userService.getAllUsers().subscribe((res)=>this.userService.users=res);
    console.log('ngOninit called',this.userService.users);
}

  // variable to check for valid or not
  isValid : boolean = false;
  //variable to check whether login-btn is pressed or not 
  isPressed : boolean = false;

  // method to perform authentication
  authenticate(){ 
    
    this.userService.getAllUsers().subscribe((res)=>this.userService.users=res);
    // login-btn is pressed
    this.isPressed = true;


    // method to validate credentials, if success then navigate to home
    // else display "Invalid Credentials" 
    this.userService.users.forEach((user : User) =>{ 
      if(this.loginForm.value.userName === user.userName && this.loginForm.value.password === user.password){
        this.isValid = true;
        this.userService.isLoggedIn = true;
        this.router.navigate(['home']);
      }
      
    })

  }

  get userName(){
    return this.loginForm.get('userName');
  }

  get password(){
    return this.loginForm.get('password');
  }
}