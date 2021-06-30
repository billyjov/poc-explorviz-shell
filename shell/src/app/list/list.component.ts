import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  elementUrl = 'assets/ember-app/billy.js';
  // elementUrl = 'assets/ember-app/billy-baaa55aec3d5c1545ad35ff960d77df5.js';
  constructor() {}

  ngOnInit(): void {}
}
