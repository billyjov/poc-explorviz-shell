import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  elementUrl = 'assets/ember-app/billy.js';
  constructor() {}

  ngOnInit(): void {}
}
