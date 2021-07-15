import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isNavbarCollapsed = true;
  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      console.log('event was sent from sub app:::: ', event);
      this.router.navigateByUrl('landscapes');
    });
  }
}
