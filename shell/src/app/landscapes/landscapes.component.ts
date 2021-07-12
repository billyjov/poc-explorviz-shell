import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../script-loader.service';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss'],
})
export class LandscapesComponent implements OnInit {
  public elementUrl = 'assets/landscapes/landscapes.js';

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigate(['/landscapes']).then(() => {
    //   window.location.reload();
    // });
  }
}
