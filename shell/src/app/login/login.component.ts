import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
     this.authService
       .checkLogin()
       .then((res) => {
         console.log('auth res works: ', res)
        //  this.router.navigateByUrl(environment.auth0.routeAfterLogin);
       })
       .catch(() => this.authService.login());
  }

}
