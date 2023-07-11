import { Component } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserserviceService, private router: Router) { }

  // signupForm, a reactive form defined to take credentials from template
  signUpForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(5), Validators.required])
  })

  ngOnit(){
    this.userService.getAllUsers().subscribe((res)=>this.userService.users=res);
  }


  //newuser variable of type user to add credentials of new user to Users array
  newuser: User = {} as User;
  // to check if variable is added or not 
  isAdded: boolean = false;
  // to check if sign up is clicked or not 
  isPressed: boolean = false;

  // method to add new user
  addUser() { // signup-btn is clicked
    this.isPressed = true;
    //assigning values to newuser from reactive form 
    this.newuser.userName = this.signUpForm.value.userName;
    this.newuser.password = this.signUpForm.value.password;
    this.userService.addNewUser(this.newuser).subscribe((res) => {
    });
    // user is added
    this.isAdded = true;

    this.userService.getAllUsers().subscribe((res)=>this.userService.users=res);
    
    this.router.navigate(["/"]);
  }

  get userName(){
    return this.signUpForm.get('userName');
  }

  get password(){
    return this.signUpForm.get('password');
  }

}