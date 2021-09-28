import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public showTraceOverview = false;
  public showColorPicker = false;
  public showCollaborativeMode = false;

  constructor() { }

  ngOnInit(): void {
  }
}
