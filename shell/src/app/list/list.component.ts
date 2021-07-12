import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public elementUrl = 'assets/ember-app/billy.js';
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigate(['/list']).then(() => {
    //   window.location.reload();
    // });
  }
}
