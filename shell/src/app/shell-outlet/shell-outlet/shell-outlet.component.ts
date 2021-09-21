import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent, Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-shell-outlet',
  templateUrl: './shell-outlet.component.html',
  styleUrls: ['./shell-outlet.component.scss'],
})
export class ShellOutletComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  public user = this.authService.user;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      this.router.navigateByUrl('landscapes');
    });

    this.setLandscapeVisualization();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private setLandscapeVisualization(): void {
    this.subscriptions.add(
      fromEvent(window, 'landscapes:navigate-to-visualization').subscribe(
        (_event: Partial<CustomEvent>) => {
          this.navigateToRoute('/visualization');
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

  public isVisualizationRoute(): boolean {
    return this.router.url === '/visualization';
  }

  public get appAlias(): string {
    return JSON.parse(localStorage.getItem('currentLandscapeToken') as string)?.alias;
  }
}
