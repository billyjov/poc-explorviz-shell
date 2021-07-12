import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { AuthService } from './auth.service';
import { ScriptLoaderService } from './script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isNavbarCollapsed = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private scriptLoaderService: ScriptLoaderService
    ) { }

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      console.log('event was sent from sub app:::: ', event);
      this.router.navigateByUrl('landscapes');
    });

    // load micro frontend ember placeholder vendor
    this.scriptLoaderService.loadScript('ember-placeholder-vendor');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
