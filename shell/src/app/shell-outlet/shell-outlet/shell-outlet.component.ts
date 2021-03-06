import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent, Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/auth/auth.service';
import { EventBridgeService } from 'src/app/core/event-bridge/event-bridge.service';

@Component({
  selector: 'app-shell-outlet',
  templateUrl: './shell-outlet.component.html',
  styleUrls: ['./shell-outlet.component.scss'],
})
export class ShellOutletComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  public user = this.authService.user;
  public isSidebarOpen = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private authService: AuthService,
    private eventBridgeService: EventBridgeService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      fromEvent(window, 'ember-app:landscapes').subscribe(() => {
        this.router.navigateByUrl('landscapes');
      })
    );

    this.setLandscapeVisualization();
    this.openVisualizationSidebar();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public closeSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
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
    return JSON.parse(localStorage.getItem('currentLandscapeToken') as string)
      ?.alias;
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

  private openVisualizationSidebar(): void {
    this.subscriptions.add(
      fromEvent(window, 'visualization:open-sidebar').subscribe(
        (event: Partial<CustomEvent>) => {
          if (!!event.detail) {
            this.eventBridgeService.landscapeDataSubject.next(event.detail);
          }
          this.isSidebarOpen = true;
        }
      )
    );
  }
}
