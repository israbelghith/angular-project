import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  constructor(private authService : AuthService,
    private router: Router) { }

    err:number = 0;//s'il n y a pas des erreurs lors de l'appel de jwt
    onLoggedin()
    {
    this.authService.login(this.user).subscribe((data)=> {
    let jwToken = data.headers.get('Authorization');
    this.authService.saveToken(jwToken);
    this.router.navigate(['/']);
    },(err)=>{ this.err = 1;
    });
    }


  ngOnInit(): void {
  }

}
