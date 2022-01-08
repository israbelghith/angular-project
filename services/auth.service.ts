import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 /* users: User[] = [
    {"username":"admin","password":"123","roles":['ADMIN']},
    {"username":"nadhem","password":"123","roles":['USER']},
    {"username":"isra","password":"123","roles":['USER']}
   ];*/
   apiURL: string = 'http://localhost:8081/users';
   token:string;

public loggedUser :string;
public isloggedIn: Boolean = false;
public roles :string[];

  constructor(private router: Router,
    private http : HttpClient) { }

  login(user : User)
{
return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});//observe:'response' on doit récupérer toute la reponse envoyée par cet apiURL
}

saveToken(jwt:string){
 localStorage.setItem('jwt',jwt);//crée un local storage et stoker le token
 this.token = jwt;
 this.isloggedIn = true;
 }

 //loadToken() {
 // this.token = localStorage.getItem('jwt');
// }
 getToken():string {
  return this.token;
  }
  /*SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.username=== curUser.username && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username;
    this.isloggedIn = true;
    this.roles = curUser.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }*/
    
    isAdmin():Boolean{
      if (!this.roles) //this.roles== undefiened
      return false;
      return (this.roles.indexOf('ADMIN') >-1) ;
      
      }


      logout() {
        this.isloggedIn= false;
        this.loggedUser = undefined;
        this.roles = undefined;
        localStorage.removeItem('loggedUser');
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
        this.router.navigate(['/login']);
        }

        setLoggedUserFromLocalStorage(login : string) {
          this.loggedUser = login;
          this.isloggedIn = true;
       //   this.getUserRoles(login);
          }
      /*    getUserRoles(username :string){
          this.users.forEach((curUser) => {
          if( curUser.username == username ) {
          this.roles = curUser.roles;
          }
          });
          }*/
}
