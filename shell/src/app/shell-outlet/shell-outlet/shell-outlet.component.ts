import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent } from 'rxjs';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-shell-outlet',
  templateUrl: './shell-outlet.component.html',
  styleUrls: ['./shell-outlet.component.scss'],
})
export class ShellOutletComponent implements OnInit {
  public isNavbarCollapsed = true;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      console.log('event was sent from sub app:::: ', event);
      this.router.navigateByUrl('landscapes');
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  public navigateToRoute(path: string): void {
    this.router.navigate([path]).then(() => {
      window.location.reload();
    })
  }
}
