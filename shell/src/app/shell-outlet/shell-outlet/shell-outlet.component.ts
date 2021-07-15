import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent, Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-shell-outlet',
  templateUrl: './shell-outlet.component.html',
  styleUrls: ['./shell-outlet.component.scss'],
})
export class ShellOutletComponent implements OnInit {
  public isNavbarCollapsed = true;
  public user = this.authService.user;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      console.log('event was sent from sub app:::: ', event);
      this.router.navigateByUrl('landscapes');
    });

    this.setLandscapeVisualization();
  }

  private setLandscapeVisualization(): void {
    this.subscriptions.add(
      fromEvent(window, 'landscapes:navigate-to-visualization').subscribe(
        (event: Partial<CustomEvent>) => {
          this.navigateToRoute('/visualization');
          console.log('event from landscape: ', event);
        }
      )
    );
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  public navigateToRoute(path: string): void {
    this.router.navigate([path]).then(() => {
      window.location.href =
        window.location.protocol + '//' + window.location.host + path;
    });
  }
}
