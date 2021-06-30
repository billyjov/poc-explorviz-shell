import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss'],
})
export class LandscapesComponent implements OnInit {
  public elementUrl = 'assets/landscapes/landscapes.js';
  // elementUrl = 'assets/ember-app/billy.js';

  constructor() {}

  ngOnInit(): void {}
}
