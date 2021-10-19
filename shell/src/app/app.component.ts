import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
    this.subscriptions.add(
      fromEvent(window, 'ember-app:landscapes').subscribe(() => {
      this.router.navigateByUrl('landscapes');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
