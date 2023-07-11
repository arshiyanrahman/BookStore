import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService{

  url1 ="http://localhost:8087/allusers"
  url2="http://localhost:8087/user/register"

  constructor(private http:HttpClient) {} 

  users : User[] = [];
  isLoggedIn : boolean =false;

  // method returning list of users 
  getAllUsers(){
      return this.http.get<User[]>(this.url1);
  }

  // method to register a new user
  addNewUser (data:User){
    this.getAllUsers();
    return this.http.post(this.url2,data);

  }
}
